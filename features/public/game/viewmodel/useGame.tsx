import { useAuthStore } from '@/shared/store/auth.store';
import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import EventSource from 'react-native-sse';
import { UseGame } from '../types/gameTypes';

const useGame = ():UseGame => {
  const [count,setCount]=useState(0)
  const [correctResponseCount,setCorrectResponseCount]=useState(0)
  const [isAlive,setIsAlive]=useState(true)
  const [isError,setError]=useState(false)
  const [isLoading,setLoading]=useState(false)
  const { userId, token } = useAuthStore();
  const [question, setQuestion] = useState('');
  const [selected,setSelected] = useState<string|null>(null)
  const [meta, setMeta] = useState(null);
  const [correct,setCorrect] = useState('')
  const questionRef = useRef('');
  const metaRef = useRef('');
  const eventSourceRef = useRef<EventSource | null>(null);
  const llamaAnim = useRef(new Animated.Value(300)).current

  const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
  const url = `${BASE_URL}/user/question?userId=${userId}`;
  const [options,setOptions] =useState<string[]>([]) 
  const triggerAnimation=()=>{
    Animated.spring(llamaAnim,{
      toValue:0,
      useNativeDriver:true,
      speed:80
    }).start()
  }
  const stopGame = () => {
     if (eventSourceRef.current) {
       eventSourceRef.current.close();
       eventSourceRef.current = null;
     }
   };

  const startGame = () => {
    if (count>5) {
      setIsAlive(false)
      return
    }
    setLoading(true)
    if (eventSourceRef.current) return;
    setQuestion('')
    setOptions([])
    questionRef.current = ''
    metaRef.current=''
    setSelected(null)
    const eventSource = new EventSource<'question' | 'metadata' | 'done'>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    eventSourceRef.current = eventSource;

    eventSource.addEventListener('question', (event) => {
    if (count === 0) {
      triggerAnimation()
    }
    setLoading(false)
    questionRef.current += event.data + ' ';
      setQuestion(questionRef.current);
    });

    eventSource.addEventListener('metadata', (event) => {
      metaRef.current += event.data;
    });

    eventSource.addEventListener('error', (event) => {
      stopGame()
      setError(true)
    });

    eventSource.addEventListener('done', () => {
      stopGame()

      try {
        const parsedMeta = JSON.parse(metaRef.current);
        setMeta(parsedMeta);

        setOptions([parsedMeta.options.A,parsedMeta.options.B,parsedMeta.options.C,parsedMeta.options.D])
       setCorrect(parsedMeta.answer)
      } catch (err) {
        console.error('Meta parse error:', err);
      }
    });
  };


  const handleSelect=(i:string)=>{
    setCount((prev)=>prev+1)
    setSelected(i)
    if (i === correct) {
      setCorrectResponseCount(prev=>prev+1)
    }
  }
 

  return {
    question,
    options,
    meta,
    startGame,
    stopGame,
    correct,
    selected,
    handleSelect,
    count,
    llamaAnim,
    isLoading,
    isAlive,
    correctResponseCount,
    isError
  };
};

export default useGame;
