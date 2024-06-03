// https://ja.react.dev/blog/2024/04/25/react-19#support-for-async-scripts
// https://ja.react.dev/blog/2024/04/25/react-19#support-for-async-scripts
// ここら辺の挙動の確認を行う

export const ThirdPartyComponent = () => {
  const thirdPartyScriptSrc = 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js'
  return (
    <div>
      <script async={true} src={thirdPartyScriptSrc} />
      <button onClick={() => {
        // thirdpartyjsで仕込む値
        const thirdpartyJS = (window as any).THIRD_PARTY_JS as {
          data: any,
          timeoutFlag?: boolean;
      };
      console.log('check', thirdpartyJS)
      }}>button</button>
    </div>
  ) 
}