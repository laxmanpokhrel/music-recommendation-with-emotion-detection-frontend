import Template from "@Components/Template";
import { templateActions } from "@Store/actions";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: "value" }));
  console.log(
    "templateActions: ",
    templateActions.templateReducerOne({ key: "value" })
  );
  return (
    <div className="App">
      <div>This is starter kit.</div>
      <Template />
    </div>
  );
}
