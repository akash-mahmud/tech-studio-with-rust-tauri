import "./styles.css";
import TradeViewChart from "react-crypto-chart";
import { useMantineColorScheme } from "@mantine/core";

export default function CryptoChart() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div className="parent">
          <TradeViewChart
            
        interval="5m"
        containerStyle={{
          minHeight: "100vh",
          minWidth: "100%",
          marginBottom: "30px"
        }}
        chartLayout={{
          layout: {
            backgroundColor: `${colorScheme==='dark'? 'black':'#ededed'}`,
            textColor: `${colorScheme==='dark'? 'white':'#253248'}`,
          },
          grid: {
            vertLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            },
            horzLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            }
          },
          priceScale: {
            borderColor: "#485c7b"
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false
          }
        }}
        candleStickConfig={{
          upColor: "green",
          downColor: "red",
          borderDownColor: "transparent",
          borderUpColor: "transparent",
          wickDownColor: "gray",
          wickUpColor: "gray"
        }}
        pair="ETHUSDT"
      />
    </div>
  );
}
