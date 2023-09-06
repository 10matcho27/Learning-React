import React, {useState, useEffect} from 'react'

const TextInput = () => {
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleName2 = (event) => {
        setName2(event.target.value);
    }

    useEffect(() => {
        console.log(name, name2);
        return () => {
            console.log('clean-up function: This function is called before rerendering')
        }
    }, [name]);

    return(
        <>
            <input
                onChange={(event) => handleName(event)}
                type = {'text'}
                value = {name}/>
            <input
                onChange={(event) => handleName2(event)}
                type = {'text'}
                value = {name2}/>
        </>
    );
};

export default TextInput;

    // !useEffectについて
    /* 毎回実行
    useEffect(() => {
        console.log(name, name2);
    });
    */
    /* 初回のみ実行
    useEffect(() => {
        console.log(name, name2);
    },[]);
    */
    /* trigger変更時に実行
    useEffect(() => {
        console.log(name, name2);
    },[trigger]);
    */
    /* trigger, trigger2, ..., triggerN変更時に実行
    useEffect(() => {
        console.log(name, name2);
    },[trigger, trigger2, ..., triggerN]);
    */

    //! useEffectのユースケース
    /*
    ・APIやDBから非同期通信でデータをfetchする。
    ・特定の値が変わったらデータを再取得(refetch)する。
    ・jsにはfetchAPIが存在。それを使用する。
    */