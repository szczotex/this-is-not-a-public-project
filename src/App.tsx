import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useNavigate, 
  useLocation 
} from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ONas from "./pages/ONas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Critical routing fix component
const RouteHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle redirects from 404.html
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('p');
    
    if (redirectPath) {
      // Decode and navigate to the intended path
      const decodedPath = decodeURIComponent(redirectPath);
      navigate(decodedPath, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/o-nas" element={<ONas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
