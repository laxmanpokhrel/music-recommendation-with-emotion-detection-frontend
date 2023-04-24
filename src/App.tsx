import Template from "@UI/atoms/TestComponent";
import { templateActions } from "@Store/actions";
import { useDispatch } from "react-redux";
import { initDomToCode } from "dom-to-code";
import TemplateCard from "@UI/atoms/templateCard";
export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: "value" }));

  return (
    <>
      {process.env.NODE_ENV !== "production" && initDomToCode()}
      <div className="App">
        <div>This is starter kit.</div>
        <Template />
        {/* <TemplateCard /> */}
      </div>
    </>
  );
}
