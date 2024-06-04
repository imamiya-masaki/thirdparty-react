'use client'

// import { scri } from "react"

// https://ja.react.dev/blog/2024/04/25/react-19#support-for-async-scripts
// https://ja.react.dev/blog/2024/04/25/react-19#support-for-async-scripts
// ここら辺の挙動の確認を行う

export const ThirdPartyComponent = () => {
  const thirdPartyScriptSrc = 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js'
  return (
    <div>
      thirdparty 
        <script src={thirdPartyScriptSrc} async={true}/>
    </div>
  ) 
}