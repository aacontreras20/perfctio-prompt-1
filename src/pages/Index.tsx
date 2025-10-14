import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { PeopleCard } from "@/components/PeopleCard";
import { EmptyState } from "@/components/EmptyState";
import { mockPeople, Person } from "@/data/mockPeople";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(mockPeople);

  useEffect(() => {
    // Simulate API call delay
    setIsSearching(true);
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredPeople(mockPeople);
      } else {
        const query = searchQuery.toLowerCase();
        const filtered = mockPeople.filter(
          (person) =>
            person.name.toLowerCase().includes(query) ||
            person.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            person.snippet.toLowerCase().includes(query) ||
            person.matchedContext.toLowerCase().includes(query)
        );
        setFilteredPeople(filtered);
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                perfct.io
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                People Card Recall
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-full bg-muted">
                {filteredPeople.length} {filteredPeople.length === 1 ? "contact" : "contacts"}
              </span>
            </div>
          </div>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            isSearching={isSearching}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isSearching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 rounded-lg bg-muted/50 animate-pulse"
              />
            ))}
          </div>
        ) : filteredPeople.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {filteredPeople.map((person) => (
              <PeopleCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <EmptyState searchQuery={searchQuery} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Consent-first AI meeting companion • Private & secure</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
