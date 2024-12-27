import Table from "@/components/Table";
import { data } from "@/constants";

export default function Home() {
  return (
    <div>
      <Table data={data} />
    </div>
  );
}
