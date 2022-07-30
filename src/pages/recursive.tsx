import React, {
  useEffect,
  useState,
  useLayoutEffect,
  memo,
  Suspense,
} from "react";
import useSWR from "swr";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

export type Team = {
  id: string;
  team_name: string;
  team_name_kana: string;
  team_leader_name: string;
  children: Team[];
};

const data: Team = {
  id: "1",
  team_name: "事業本部",
  team_name_kana: "ジギョウホンブ",
  team_leader_name: "ジョンソン",
  children: [
    {
      id: "2",
      team_name: "人事部",
      team_name_kana: "ヒガシニホン",
      team_leader_name: "マイケル",
      children: [
        {
          id: "4",
          team_name: "広報部",
          team_name_kana: "ヒガシニホン",
          team_leader_name: "マイケル",
          children: [],
        },
      ],
    },
    {
      id: "3",
      team_name: "西日本",
      team_name_kana: "ニシシニホン",
      team_leader_name: "ビヨンセ",
      children: [
        {
          id: "5",
          team_name: "営業部",
          team_name_kana: "ヒガシニホン",
          team_leader_name: "マイケル",
          children: [],
        },
        {
          id: "6",
          team_name: "開発部",
          team_name_kana: "ヒガシニホン",
          team_leader_name: "マイケル",
          children: [],
        },
      ],
    },
  ],
};

export const RecursivePage: React.FC = memo(() => {
  const renderTree = (nodes: Team) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.team_name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  console.log(renderTree(data));

  return (
    <>
      {/* TreeViewで実装した場合 */}
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["1"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: "100%", flexGrow: 1, width: "30%", overflowY: "auto" }}
      >
        {renderTree(data)}
      </TreeView>
    </>
  );
});
