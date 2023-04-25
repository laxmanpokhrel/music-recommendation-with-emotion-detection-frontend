import { templateActions } from "@Store/actions";
import { useDispatch } from "react-redux";
import { initDomToCode } from "dom-to-code";
import ProjectPage from "@Pages/ProjectPage";
export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: "value" }));

  return (
    <>
      {process.env.NODE_ENV !== "production" && initDomToCode()}
      <div className="App naxatw-bg-gray-900">
        <div>This is starter kit.</div>
        <ProjectPage />
      </div>
    </>
  );
}
