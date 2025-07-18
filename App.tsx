import { Switch, Route } from "wouter";
import { queryClient } from "./client/src/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./client/src/components/ui/toaster";
import { TooltipProvider } from "./client/src/components/ui/tooltip";
import Home from "./client/src/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
