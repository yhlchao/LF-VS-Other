import LogicFlow from "@logicflow/core";
import { Graph } from "@antv/x6";
import {
  createRandomLFNode,
  createRandomLFEdge,
  createRandomX6Node,
  createRandomX6Edge
} from "./util";

/**
 * 初始化LogicFlow画布
 * @param {HTMLElement} container - 画布的DOM容器
 * @param {number} nodeNumber - 节点数量
 * @param {number} edgeNumber - 连线数量
 */
function initLogicFlow(container, nodeNumber, edgeNumber, setTime) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const renderData = {
    nodes: createRandomLFNode(nodeNumber, width, height),
    edges: createRandomLFEdge(edgeNumber, nodeNumber)
  };
  // 开始计时
  const startTimeStamp = new Date().getTime();
  const lf = new LogicFlow({
    container,
    tool: {
      control: false
    },
    stopScrollGraph: true,
    stopZoomGraph: true
  });
  lf.render(renderData);
  // 在渲染完成后的下一次事件循环中结束计时
  setTimeout(() => {
    const endTimeStamp = new Date().getTime();
    const diff = endTimeStamp - startTimeStamp;
    setTime(diff);
  }, 0);
}

function initX6(container, nodeNumber, edgeNumber, setTime) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const renderData = {
    nodes: createRandomX6Node(nodeNumber, width, height),
    edges: createRandomX6Edge(edgeNumber, nodeNumber)
  };
  // 开始计时
  const startTimeStamp = new Date().getTime();
  const graph = new Graph({
    container
  });
  graph.fromJSON(renderData);
  // 在渲染完成后的下一次事件循环中结束计时
  setTimeout(() => {
    const endTimeStamp = new Date().getTime();
    const diff = endTimeStamp - startTimeStamp;
    setTime(diff);
  }, 0);
}

export { initLogicFlow, initX6 };
