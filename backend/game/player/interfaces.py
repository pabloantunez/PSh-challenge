from abc import ABC, abstractmethod

class IPlayerRepository(ABC):
    
    @abstractmethod
    def create_players(self, players_data):
        pass

    @abstractmethod
    def get_all_players(self):
        pass