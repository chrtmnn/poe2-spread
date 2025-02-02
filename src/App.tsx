import Button from "antd/es/button";
import ConfigProvider from "antd/es/config-provider";
import Space from "antd/es/space";
import theme from "antd/es/theme";
import React from "react";
import PsTable, { PsTableProps } from "./components/PsTable";
import getTrades from "./setup/services/trades";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataSource, setDataSoure] = React.useState<any>();

  React.useEffect(() => {
    const get = async () => {
      const data = await getTrades();
      console.log(data);
      setDataSoure(data);
    };
    get();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: PsTableProps<any>["columns"] = React.useMemo(
    () =>
      [
        { dataIndex: "id" },
        { dataIndex: ["buy", "quantity"] },
        { dataIndex: ["buy", "currency", "id"] },
      ].map(({ dataIndex, ...column }) => ({
        dataIndex,
        title: Array.isArray(dataIndex) ? dataIndex.join(".") : dataIndex,
        ...column,
      })),
    []
  );

  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#5e2609",
          borderRadius: 12,
        },
      }}
    >
      <Space direction={"vertical"}>
        <Button type={"primary"} onClick={() => setDarkMode((mode) => !mode)}>
          toggle
        </Button>
        <PsTable columns={columns} dataSource={dataSource} rowKey={"id"} />
      </Space>
    </ConfigProvider>
  );
};

export default App;
