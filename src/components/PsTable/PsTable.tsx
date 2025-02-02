import React from "react";
import Table, { TableProps } from "antd/es/table";

export type PsTableProps<RecordType> = TableProps<RecordType>;

export const PsTable: React.FC<PsTableProps<unknown>> = ({ ...props }) => {
  return (
    <>
      <Table {...props} />
    </>
  );
};

export default PsTable;
