import React, { memo } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import { styled, Box } from "@mui/material";

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓お試し型推論の勉強
export type Test = {
  id: string;
  team_name: string;
  children: Test[];
};

type JSONValueType = string | Test | JSONValueTypeArray | JSONValueTypeObject;

interface JSONValueTypeObject {
  [key: string]: JSONValueType;
}

export type Team = {
  id: string;
  team_name: string;
  team_name_kana: string;
  team_leader_name: string;
  depth: number;
  children: Team[];
};

interface JSONValueTypeArray extends Array<JSONValueType> {}

const test: JSONValueTypeObject = {
  id: "1",
  team_name: "事業本部",
  children: [
    {
      id: "2",
      team_name: "東日本",
      children: [
        {
          id: "4",
          team_name: "広報部",
          children: [],
        },
      ],
    },
    {
      id: "3",
      team_name: "西日本",
      children: [
        {
          id: "5",
          team_name: "営業部",
          children: [],
        },
        {
          id: "6",
          team_name: "開発部",
          children: [],
        },
      ],
    },
  ],
};
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑お試し型推論の勉強

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓再帰型の型推論の勉強
// 参考資料
// https://github.com/microsoft/TypeScript/pull/33050
// https://www.typescriptlang.org/play?#code/PTAEGEAsHtoZwJYDsDmoBGBTALgd05kqAK6KqjYCeADpqAG5yjLaYBOAZgIYDGdCTLumjFsFSJgCwAKBCge0JHGxsuLJsnF0OmLtmJtMTDtDahdPSADpQAdQTZIoAMxWA7ABpQiutA4y5RzoFJRU1JW8iKloMUVAkaDFNFnZuPlBcLiZDAFtoekwAEysZALAATRF5LiIOZELvOLzDUCERMUcBZiJMAA8uHOoAG0wALmijAFpGSZTOXiNS2TAASTFSIopoDDpHPVBKKoViIYaEsUMdM2xtoIoaOkPiMtaWwsw6pGQ0ZER3rXuMQccEwQw4NgAKpAuplBKAhggcg4XrhoZZQIUEIUkAByMR9ARJJRYug1bqseZ8Lw1BrHU47DKmADWRReXDYIiQDVwDicXHhDmwI0ZbCZJWkLwAYqZzP1BiMvJ0NExzqAdFkEOhhZpXAA2UYyCagABqXCGxEwAHk2ABBNiqSgAHghAD5QABeUAQ0AAH1AdodjtN5qttvtXCdrpdAG4lnIbUREcNMDlCNg9AhFIyTg1IFwCvDYCyGgiWeIBF50JRQEjet8XncjTzHK1E0gKWlMOKjcGLdaAxGAEzOt2e71+geUS0cXuhycj2PSOad-3hqczs19sOB12y1hcpjz2f9tfDqOgADeoAAvnGwFCumahtBcMYZfyFINDBJiQX3p8HEzIg-FAAApABlS0ADkPBRNEnFwZkmCrUBLnYNhvi2ZhsBBMFxUNB4wLgLNPWUDDyD9JBiByLAzD9YRoBGMlKJOIZfSIxQAG0AF12KvTiWUoUZQDI75uOE0DiKIa9FxkEJlFlAZk3A9N9DgCDoIkqSPUvGRQFaeg1CGIQRmElQLVg6R9I2NgkAGMZQAAIlA3QkEmZ9iGoRzLP0jloByYSLz0-T4ns4THIACQQFBIB4QxlG84L9LkcAalVLhCgaDhiCQHhsCAjR21uCQOKiB4ktAORPMKPQHIACgASg9N0L1vKyb0smS7y9CRDBxJhml2bYmNstUORyAFXDcHZ01Q0FdBBeJEiMVsGmBUAAAUACUDWWF5IGwbBqDgUYQHeegtWgFA4CsJE4vgPxsCsT9gAmOA4oQahsGANLOR4b5Jjej6vsmZxJjcYB9sO47TuAFBeWIdBnv84A7o5YiOG+iEHnA4HvuoVjgGcZwAAYAFYSaAA
type ValueOrArray<T> = T | ArrayOfValueOrArray<T>;
interface ArrayOfValueOrArray<T> extends Array<ValueOrArray<T>> {}

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const exampleStatusJSON: Json = {
  id: "1",
  team_name: "事業本部",
  children: [
    {
      id: "2",
      team_name: "東日本",
      children: [
        {
          id: "4",
          team_name: "広報部",
          children: [],
        },
      ],
    },
    {
      id: "3",
      team_name: "西日本",
      children: [
        {
          id: "5",
          team_name: "営業部",
          children: [],
        },
        {
          id: "6",
          team_name: "開発部",
          children: [],
        },
      ],
    },
  ],
};
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑再帰型の型推論の勉強

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
          background: "white",
        }}
      >
        <TeamTree teams={data} />
      </Box>
    </>
  );
});
