from abc import ABC, abstractmethod

class IPlayerRepository(ABC):
    
    @abstractmethod
    def create_player(self, nickname, profile_image):
        pass

    @abstractmethod
    def get_all_players(self):
        pass