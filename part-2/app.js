
function App () {
  const tweetData = [
    {userName:'test', name: "testing", date:"today", msg:"hellooooooo" },
    {userName:'test', name: "testing", date:"today", msg:"hellooooooo" },
    {userName:'test', name: "testing", date:"today", msg:"hellooooooo" }
  ]

  return (
    <div>
    { tweetData.map(td => <Tweet userName={td.userName} name={td.name} date={td.date} msg={td.msg}/>)}
  </div>
  )
}

