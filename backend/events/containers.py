"""Containers module."""

from dependency_injector import containers, providers

from .database import Database
from .Model.eventRepositorie import EventRepositorie

class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(modules=[".View.endpointsEvent"])

    config = providers.Configuration(yaml_files=["config.yml"])

    db = providers.Singleton(Database, db_url=config.db.url)

    eventRepositorie = providers.Factory(
        EventRepositorie,
        session_factory=db.provided.session,
    )