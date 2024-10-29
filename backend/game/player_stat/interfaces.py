from abc import ABC, abstractmethod

class IPlayerStatRepository(ABC):
    
    @abstractmethod
    def get_all_players_with_stats(self):
        pass