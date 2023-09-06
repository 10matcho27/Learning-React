import {Content, Title, PublishButton} from './index.js';
import {useState} from "react";
/*
default exportのみだとこうなる
import Content from './Content'
import Title from './Title'
*/

/*
props: 親コンポーネントから子コンポーネントに引き渡す値。引数。子コンポーネントから更新はできない。
更新するには親コンポーネントで更新用の関数を使用する。
state: コンポーネント内部で宣言・制御される。
どちらも再描画のきっかけになる！*/

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () =>{
        setIsPublished(prevState => {
            return !prevState;
        });
    }
    return (
        <div>
            <Title title = {props.title}/>
            <Content content = {props.content}/>
            <PublishButton isPublished = {isPublished} onClick = {publishArticle}/>
            
            {/* <button onClick={()=>{setIsPublished(!isPublished)}}>公開</button> */}
        </div>
    );
};
/*propsでの関数の渡し方
OK: <PublishButton isPublished = {isPublished} onClick = {() => publishArticle()}/>
・callback関数として関数を渡す。
・引数をとってそれを渡すこともできる。

OK: <PublishButton isPublished = {isPublished} onClick = {publishArticle}/>
・関数のみを渡す。


NG: <PublishButton isPublished = {isPublished} onClick = {publishArticle()}/>
・無限レンダリングが起きる。
・関数が渡す際に実行される。カッコを付けることでその時点で実行される
*/


export default Article;