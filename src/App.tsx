import Template from "@Atoms/Template";
import { templateActions } from "@Store/actions";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: "value" }));

  return (
    <div className="App">
      <div>This is starter kit.</div>
      <Template />
    </div>
  );
}
