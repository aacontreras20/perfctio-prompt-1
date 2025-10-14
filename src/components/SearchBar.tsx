import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isSearching: boolean;
}

export const SearchBar = ({ value, onChange, isSearching }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search by vibe, name, or memory…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-4 h-14 text-lg bg-card border-border focus-visible:ring-primary shadow-sm"
        disabled={isSearching}
      />
      {isSearching && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
