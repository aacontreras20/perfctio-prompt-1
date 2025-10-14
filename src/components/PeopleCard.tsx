import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Person } from "@/data/mockPeople";

interface PeopleCardProps {
  person: Person;
}

export const PeopleCard = ({ person }: PeopleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <img
            src={person.photo}
            alt={person.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-card-foreground mb-1">
              {person.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {person.tags.map((tag, index) => (
                <span key={index} className="text-xs text-muted-foreground">
                  {tag}
                  {index < person.tags.length - 1 && " • "}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {person.snippet}
        </p>
        
        <div className="pt-2 border-t border-border space-y-3">
          <p className="text-xs text-muted-foreground italic">
            Matched: {person.matchedContext}
          </p>
          <Button 
            variant="outline" 
            className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};
