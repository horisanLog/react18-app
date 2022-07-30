import React, {
  memo,
} from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import { styled, Box } from "@mui/material";

const CustomBox = styled(Box)(() => ({
  width: "100%",
  borderColor: "#22BA9D",
  borderRadius: "0.5rem",
  boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.6)",
  letterSpacing: "0.7px",
  color: "#454545",
}));

export type Team = {
  id: string;
  team_name: string;
  team_name_kana: string;
  team_leader_name: string;
  depth: number;
  children: Team[];
};

const data: Team = {
  id: "1",
  team_name: "事業本部",
  team_name_kana: "ジギョウホンブ",
  team_leader_name: "ジョンソン",
  depth: 0,
  children: [
    {
      id: "2",
      team_name: "東日本",
      team_name_kana: "ヒガシニホン",
      team_leader_name: "マイケル",
      depth: 1,
      children: [
        {
          id: "4",
          team_name: "広報部",
          team_name_kana: "コウホウ",
          team_leader_name: "ジャクソン",
          depth: 2,
          children: [],
        },
      ],
    },
    {
      id: "3",
      team_name: "西日本",
      team_name_kana: "ニシシニホン",
      team_leader_name: "ビヨンセ",
      depth: 1,
      children: [
        {
          id: "5",
          team_name: "営業部",
          team_name_kana: "エイギョウ",
          team_leader_name: "ビートル",
          depth: 2,
          children: [],
        },
        {
          id: "6",
          team_name: "開発部",
          team_name_kana: "カイハツ",
          team_leader_name: "ビル",
          depth: 2,
          children: [],
        },
      ],
    },
  ],
};

interface Props {
  teams: Team;
}

export const RecursivePage: React.FC = memo(() => {

  const teamTree = (teams: Team) => (
    <TreeItem key={teams.id} nodeId={teams.id} label={teams.team_name}>
      {Array.isArray(teams.children)
        ? teams.children.map((team) => teamTree(team))
        : null}
    </TreeItem>
  );

  const TeamTree: React.FC<Props> = ({ teams }: Props) => {
    return (
      <>
        <Box sx={{ pl: `${teams.depth}0px` }}>
          {teams.team_name}
          {teams.children?.map((team) => {
            return <TeamTree key={team.team_name} teams={team} />;
          })}
        </Box>
      </>
    );
  };

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
        {teamTree(data)}
      </TreeView>

      {/* オリジナルで実装した場合 */}
      <Box
        sx={{
          mt: 5,
          height: "100%",
          width: "30%",
          overflowY: "auto",
          background: "white"
        }}
      >
        <TeamTree teams={data} />
      </Box>
    </>
  );
});
