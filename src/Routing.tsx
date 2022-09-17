import React, { memo, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ImperativeHandlePage } from "./pages/imperativeHandle";
import { LayoutPage } from "./pages/layout";

const TopPage = lazy(() =>
  import("./pages").then(({ TopPage }) => ({
    default: TopPage,
  }))
);
const RecursivePage = lazy(() =>
  import("./pages/recursive").then(({ RecursivePage }) => ({
    default: RecursivePage,
  }))
);
const Transition = lazy(() => import("./pages/transition"));

const UserQueryPage = lazy(() =>
  import("./pages/userQuery").then(({ UserQueryPage }) => ({
    default: UserQueryPage,
  }))
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true, // React18からの機能
      refetchOnWindowFocus: false,
    },
  },
});

// const queryClient = new QueryClient();

export const Routing: React.FC = memo(() => {
  // window.addEventListener("load", function () {
  //   function print_PerformanceEntries() {
  //     // getEntries() を使用してすべてのパフォーマンスエントリのリストを取得します。
  //     var p = performance.getEntries();
  //     for (var i = 0; i < p.length; i++) {
  //       console.log("PerformanceEntry[" + i + "]");
  //       print_PerformanceEntry(p[i]);
  //     }
  //   }
  //   function print_PerformanceEntry(perfEntry: any) {
  //     var properties = ["name", "entryType", "startTime", "duration"];

  //     for (var i = 0; i < properties.length; i++) {
  //       // それぞれのプロパティをチェックします。
  //       var supported = properties[i] in perfEntry;
  //       if (supported) {
  //         var value = perfEntry[properties[i]];
  //         console.log("... " + properties[i] + " = " + value);
  //       } else {
  //         console.log("... " + properties[i] + " is NOT supported");
  //       }
  //     }
  //   }
  //   console.log("test");
  //   print_PerformanceEntries();
  // });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/recursive" element={<RecursivePage />} />
          <Route path="/query" element={<UserQueryPage />} />
          <Route path="/forward_ref" element={<ImperativeHandlePage />} />
          <Route path="/layout" element={<LayoutPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
});
