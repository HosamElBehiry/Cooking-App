import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add from "./Components/Add/Add";
import Detail from "./Components/Detail/Detail";
import Update from "./Components/Update/Update";
import Table from "./Components/Views/Table";

function App() {
  const queryClient = new QueryClient();
  toast.configure();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="Update/:id" element={<Update />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="Add" element={<Add />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}

export default App;
