import "../packages/components/index.css";

import { initialize, mswDecorator } from "msw-storybook-addon";
import { addDecorator } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity, // 缓存时间
      refetchOnWindowFocus: false, // 窗口重新聚焦刷新数据
    },
  },
});

addDecorator((stories) => (
  <QueryClientProvider client={queryClient}>{stories()}</QueryClientProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // 将标签加到iframe内的body上
  darkMode: {
    classTarget: "body",
    stylePreview: true,
  },
};
