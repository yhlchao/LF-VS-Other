function createRandomPosition(x, y) {
  const x1 = Math.ceil(Math.random() * x);
  const y1 = Math.ceil(Math.random() * y);
  return [x1, y1];
}

/**
 * 随机创建指定数量的节点(LogicFlow)
 * @param {number} nodeNumber - 节点数量
 * @param {number} width - 画布宽度
 * @param {number} height - 画布高度
 */
function createRandomLFNode(nodeNumber, width, height) {
  const nodes = [];
  for (let id = 1; id <= nodeNumber; id++) {
    const position = createRandomPosition(width, height);
    const node = {
      id: id.toString(),
      type: "rect",
      x: position[0],
      y: position[1]
    };
    nodes.push(node);
  }
  return nodes;
}

/**
 * 随机创建指定数量的连线(LogicFlow)
 * @param {number} edgeNumber - 连线数量
 * @param {number} nodeNumner - 节点数量
 */
function createRandomLFEdge(edgeNumber, nodeNumner) {
  const edges = [];
  for (let i = 0; i < edgeNumber; i++) {
    const sourceNodeId = Math.ceil(Math.random() * nodeNumner).toString();
    const targetNodeId = Math.ceil(Math.random() * nodeNumner).toString();
    const edge = {
      type: "line",
      sourceNodeId,
      targetNodeId
    };
    edges.push(edge);
  }
  return edges;
}

/**
 * 随机创建指定数量的节点(X6)
 * @param {number} nodeNumber
 * @param {number} width - 画布宽度
 * @param {number} height - 画布高度
 */
function createRandomX6Node(nodeNumber, width, height) {
  const nodes = [];
  for (let id = 1; id <= nodeNumber; id++) {
    const position = createRandomPosition(width, height);
    const node = {
      id: id.toString(),
      shape: "rect",
      width: 100,
      height: 80,
      x: position[0],
      y: position[1]
    };
    nodes.push(node);
  }
  return nodes;
}

/**
 * 随机创建指定数量的连线(X6)
 * @param {number} edgeNumber - 连线数量
 * @param {number} nodeNumner - 节点数量
 */
function createRandomX6Edge(edgeNumber, nodeNumner) {
  const edges = [];
  for (let i = 0; i < edgeNumber; i++) {
    const sourceNodeId = Math.ceil(Math.random() * nodeNumner).toString();
    const targetNodeId = Math.ceil(Math.random() * nodeNumner).toString();
    const edge = {
      shape: "edge",
      source: sourceNodeId,
      target: targetNodeId
    };
    edges.push(edge);
  }
  return edges;
}

export {
  createRandomLFNode,
  createRandomLFEdge,
  createRandomX6Node,
  createRandomX6Edge
};
