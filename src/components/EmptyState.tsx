import { SearchX } from "lucide-react";

interface EmptyStateProps {
  searchQuery: string;
}

export const EmptyState = ({ searchQuery }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <SearchX className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No results found</h3>
      <p className="text-muted-foreground max-w-md">
        {searchQuery ? (
          <>
            We couldn't find anyone matching <span className="font-medium">"{searchQuery}"</span>.
            <br />
            Try searching by name, vibe, or topic.
          </>
        ) : (
          "Start typing to search through your contacts"
        )}
      </p>
    </div>
  );
};
