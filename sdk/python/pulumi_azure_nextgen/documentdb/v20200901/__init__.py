# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .cassandra_resource_cassandra_keyspace import *
from .cassandra_resource_cassandra_table import *
from .database_account import *
from .get_cassandra_resource_cassandra_keyspace import *
from .get_cassandra_resource_cassandra_table import *
from .get_database_account import *
from .get_gremlin_resource_gremlin_database import *
from .get_gremlin_resource_gremlin_graph import *
from .get_mongo_db_resource_mongo_db_collection import *
from .get_mongo_db_resource_mongo_db_database import *
from .get_notebook_workspace import *
from .get_sql_resource_sql_container import *
from .get_sql_resource_sql_database import *
from .get_sql_resource_sql_stored_procedure import *
from .get_sql_resource_sql_trigger import *
from .get_sql_resource_sql_user_defined_function import *
from .get_table_resource_table import *
from .gremlin_resource_gremlin_database import *
from .gremlin_resource_gremlin_graph import *
from .list_database_account_connection_strings import *
from .list_database_account_keys import *
from .list_notebook_workspace_connection_info import *
from .mongo_db_resource_mongo_db_collection import *
from .mongo_db_resource_mongo_db_database import *
from .notebook_workspace import *
from .sql_resource_sql_container import *
from .sql_resource_sql_database import *
from .sql_resource_sql_stored_procedure import *
from .sql_resource_sql_trigger import *
from .sql_resource_sql_user_defined_function import *
from .table_resource_table import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from ... import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "azure-nextgen:documentdb/v20200901:CassandraResourceCassandraKeyspace":
                return CassandraResourceCassandraKeyspace(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:CassandraResourceCassandraTable":
                return CassandraResourceCassandraTable(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:DatabaseAccount":
                return DatabaseAccount(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:GremlinResourceGremlinDatabase":
                return GremlinResourceGremlinDatabase(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:GremlinResourceGremlinGraph":
                return GremlinResourceGremlinGraph(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:MongoDBResourceMongoDBCollection":
                return MongoDBResourceMongoDBCollection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:MongoDBResourceMongoDBDatabase":
                return MongoDBResourceMongoDBDatabase(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:NotebookWorkspace":
                return NotebookWorkspace(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:SqlResourceSqlContainer":
                return SqlResourceSqlContainer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:SqlResourceSqlDatabase":
                return SqlResourceSqlDatabase(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:SqlResourceSqlStoredProcedure":
                return SqlResourceSqlStoredProcedure(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:SqlResourceSqlTrigger":
                return SqlResourceSqlTrigger(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:SqlResourceSqlUserDefinedFunction":
                return SqlResourceSqlUserDefinedFunction(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:documentdb/v20200901:TableResourceTable":
                return TableResourceTable(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "documentdb/v20200901", _module_instance)

_register_module()
