import { useState, useRef, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Location {
  id: string;
  name: string;
  type: string;
  description: string;
}

interface LocationSearchProps {
  onLocationSelect: (location: Location) => void;
  placeholder?: string;
  defaultValue?: string;
}

// Popular locations in Alwar
const alwarLocations: Location[] = [
  {
    id: "1",
    name: "City Palace, Alwar",
    type: "Heritage Site",
    description: "Historic royal palace with stunning architecture"
  },
  {
    id: "2", 
    name: "Bala Quila Fort",
    type: "Fort",
    description: "Ancient hilltop fort with panoramic views"
  },
  {
    id: "3",
    name: "Sariska Tiger Reserve",
    type: "Wildlife Sanctuary",
    description: "Famous tiger reserve and national park"
  },
  {
    id: "4",
    name: "Siliserh Lake",
    type: "Lake",
    description: "Beautiful artificial lake with boating facilities"
  },
  {
    id: "5",
    name: "Neemrana Fort Palace",
    type: "Heritage Hotel",
    description: "15th century hill fort turned luxury hotel"
  },
  {
    id: "6",
    name: "Alwar Museum",
    type: "Museum",
    description: "Rich collection of artifacts and paintings"
  },
  {
    id: "7",
    name: "Moosi Maharani Chhatri",
    type: "Monument",
    description: "Beautiful cenotaph with intricate carvings"
  },
  {
    id: "8",
    name: "Kesroli Hill Fort",
    type: "Fort",
    description: "7th century fort with heritage accommodation"
  },
  {
    id: "9",
    name: "Bhangarh Fort",
    type: "Ruins",
    description: "Archaeological ruins with mysterious legends"
  },
  {
    id: "10",
    name: "Alwar Market",
    type: "Shopping",
    description: "Traditional market for local handicrafts"
  }
];

const LocationSearch = ({ onLocationSelect, placeholder = "Where in Alwar?", defaultValue = "" }: LocationSearchProps) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = alwarLocations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredLocations([]);
      setShowDropdown(false);
    }
    setSelectedIndex(-1);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationClick = (location: Location) => {
    setSearchTerm(location.name);
    setShowDropdown(false);
    onLocationSelect(location);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!showDropdown) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredLocations.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredLocations.length) {
          handleLocationClick(filteredLocations[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleInputFocus = () => {
    if (searchTerm.length > 0 && filteredLocations.length > 0) {
      setShowDropdown(true);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          className="pl-10 pr-4"
        />
      </div>

      {showDropdown && filteredLocations.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-60 overflow-y-auto bg-background border shadow-lg">
          <div className="p-1">
            {filteredLocations.map((location, index) => (
              <div
                key={location.id}
                className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${
                  index === selectedIndex 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => handleLocationClick(location)}
              >
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {location.name}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {location.type}
                    </span>
                    <span className="truncate">{location.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default LocationSearch;