import Button from "./Button";
import Count from "./Count"
import List from "./List";
export default function App() {
  const flag = false, count = 10;
  const handleClick = () => {
    alert('clicked')
  }
  return (
    <>
      <p className="test">Am in App</p>
      <Count count={count} name="test"></Count>
      <Button type="primary" clickEvent={handleClick} />
      <Button type="secondary" />

      <List />


    </>
  )
}

