import { useState } from "react";
import Tool from "./components/Tool";
import { initLogicFlow, initX6 } from "./lib/init";
import "./App.css";
import "./components/style.css";
import "antd/dist/antd.css";
import "@logicflow/core/dist/style/index.css";

function App() {
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(false);

  /**
   * 初始化画布
   * @param {string} framework - 所选框架
   * @param {number} nodeNumber - 节点数量
   * @param {number} edgeNumber - 连线数量
   */
  function initGraph(framework, nodeNumber, edgeNumber) {
    const container = document.getElementById("container");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
    const graph = document.createElement("div");
    graph.id = "graph";
    container.append(graph);
    // 初始化
    switch (framework) {
      case "logicflow":
        initLogicFlow(graph, nodeNumber, edgeNumber, setTime);
        break;
      case "x6":
        initX6(graph, nodeNumber, edgeNumber, setTime);
        break;
      default:
        break;
    }
  }

  function changeGraph() {}

  return (
    <div className="App">
      <div id="container" className="container"></div>
      <Tool
        time={time}
        loading={loading}
        initGraph={initGraph}
        changeGraph={changeGraph}
      />
    </div>
  );
}

export default App;
