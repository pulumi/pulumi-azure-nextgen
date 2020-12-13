# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetManagedDatabaseResult',
    'AwaitableGetManagedDatabaseResult',
    'get_managed_database',
]

@pulumi.output_type
class GetManagedDatabaseResult:
    """
    A managed database resource.
    """
    def __init__(__self__, catalog_collation=None, collation=None, create_mode=None, creation_date=None, default_secondary_location=None, earliest_restore_point=None, failover_group_id=None, id=None, location=None, long_term_retention_backup_resource_id=None, name=None, recoverable_database_id=None, restorable_dropped_database_id=None, restore_point_in_time=None, source_database_id=None, status=None, storage_container_sas_token=None, storage_container_uri=None, tags=None, type=None):
        if catalog_collation and not isinstance(catalog_collation, str):
            raise TypeError("Expected argument 'catalog_collation' to be a str")
        pulumi.set(__self__, "catalog_collation", catalog_collation)
        if collation and not isinstance(collation, str):
            raise TypeError("Expected argument 'collation' to be a str")
        pulumi.set(__self__, "collation", collation)
        if create_mode and not isinstance(create_mode, str):
            raise TypeError("Expected argument 'create_mode' to be a str")
        pulumi.set(__self__, "create_mode", create_mode)
        if creation_date and not isinstance(creation_date, str):
            raise TypeError("Expected argument 'creation_date' to be a str")
        pulumi.set(__self__, "creation_date", creation_date)
        if default_secondary_location and not isinstance(default_secondary_location, str):
            raise TypeError("Expected argument 'default_secondary_location' to be a str")
        pulumi.set(__self__, "default_secondary_location", default_secondary_location)
        if earliest_restore_point and not isinstance(earliest_restore_point, str):
            raise TypeError("Expected argument 'earliest_restore_point' to be a str")
        pulumi.set(__self__, "earliest_restore_point", earliest_restore_point)
        if failover_group_id and not isinstance(failover_group_id, str):
            raise TypeError("Expected argument 'failover_group_id' to be a str")
        pulumi.set(__self__, "failover_group_id", failover_group_id)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if long_term_retention_backup_resource_id and not isinstance(long_term_retention_backup_resource_id, str):
            raise TypeError("Expected argument 'long_term_retention_backup_resource_id' to be a str")
        pulumi.set(__self__, "long_term_retention_backup_resource_id", long_term_retention_backup_resource_id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if recoverable_database_id and not isinstance(recoverable_database_id, str):
            raise TypeError("Expected argument 'recoverable_database_id' to be a str")
        pulumi.set(__self__, "recoverable_database_id", recoverable_database_id)
        if restorable_dropped_database_id and not isinstance(restorable_dropped_database_id, str):
            raise TypeError("Expected argument 'restorable_dropped_database_id' to be a str")
        pulumi.set(__self__, "restorable_dropped_database_id", restorable_dropped_database_id)
        if restore_point_in_time and not isinstance(restore_point_in_time, str):
            raise TypeError("Expected argument 'restore_point_in_time' to be a str")
        pulumi.set(__self__, "restore_point_in_time", restore_point_in_time)
        if source_database_id and not isinstance(source_database_id, str):
            raise TypeError("Expected argument 'source_database_id' to be a str")
        pulumi.set(__self__, "source_database_id", source_database_id)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if storage_container_sas_token and not isinstance(storage_container_sas_token, str):
            raise TypeError("Expected argument 'storage_container_sas_token' to be a str")
        pulumi.set(__self__, "storage_container_sas_token", storage_container_sas_token)
        if storage_container_uri and not isinstance(storage_container_uri, str):
            raise TypeError("Expected argument 'storage_container_uri' to be a str")
        pulumi.set(__self__, "storage_container_uri", storage_container_uri)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="catalogCollation")
    def catalog_collation(self) -> Optional[str]:
        """
        Collation of the metadata catalog.
        """
        return pulumi.get(self, "catalog_collation")

    @property
    @pulumi.getter
    def collation(self) -> Optional[str]:
        """
        Collation of the managed database.
        """
        return pulumi.get(self, "collation")

    @property
    @pulumi.getter(name="createMode")
    def create_mode(self) -> Optional[str]:
        """
        Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
        """
        return pulumi.get(self, "create_mode")

    @property
    @pulumi.getter(name="creationDate")
    def creation_date(self) -> str:
        """
        Creation date of the database.
        """
        return pulumi.get(self, "creation_date")

    @property
    @pulumi.getter(name="defaultSecondaryLocation")
    def default_secondary_location(self) -> str:
        """
        Geo paired region.
        """
        return pulumi.get(self, "default_secondary_location")

    @property
    @pulumi.getter(name="earliestRestorePoint")
    def earliest_restore_point(self) -> str:
        """
        Earliest restore point in time for point in time restore.
        """
        return pulumi.get(self, "earliest_restore_point")

    @property
    @pulumi.getter(name="failoverGroupId")
    def failover_group_id(self) -> str:
        """
        Instance Failover Group resource identifier that this managed database belongs to.
        """
        return pulumi.get(self, "failover_group_id")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="longTermRetentionBackupResourceId")
    def long_term_retention_backup_resource_id(self) -> Optional[str]:
        """
        The name of the Long Term Retention backup to be used for restore of this managed database.
        """
        return pulumi.get(self, "long_term_retention_backup_resource_id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="recoverableDatabaseId")
    def recoverable_database_id(self) -> Optional[str]:
        """
        The resource identifier of the recoverable database associated with create operation of this database.
        """
        return pulumi.get(self, "recoverable_database_id")

    @property
    @pulumi.getter(name="restorableDroppedDatabaseId")
    def restorable_dropped_database_id(self) -> Optional[str]:
        """
        The restorable dropped database resource id to restore when creating this database.
        """
        return pulumi.get(self, "restorable_dropped_database_id")

    @property
    @pulumi.getter(name="restorePointInTime")
    def restore_point_in_time(self) -> Optional[str]:
        """
        Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        """
        return pulumi.get(self, "restore_point_in_time")

    @property
    @pulumi.getter(name="sourceDatabaseId")
    def source_database_id(self) -> Optional[str]:
        """
        The resource identifier of the source database associated with create operation of this database.
        """
        return pulumi.get(self, "source_database_id")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        Status of the database.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="storageContainerSasToken")
    def storage_container_sas_token(self) -> Optional[str]:
        """
        Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
        """
        return pulumi.get(self, "storage_container_sas_token")

    @property
    @pulumi.getter(name="storageContainerUri")
    def storage_container_uri(self) -> Optional[str]:
        """
        Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
        """
        return pulumi.get(self, "storage_container_uri")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetManagedDatabaseResult(GetManagedDatabaseResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetManagedDatabaseResult(
            catalog_collation=self.catalog_collation,
            collation=self.collation,
            create_mode=self.create_mode,
            creation_date=self.creation_date,
            default_secondary_location=self.default_secondary_location,
            earliest_restore_point=self.earliest_restore_point,
            failover_group_id=self.failover_group_id,
            id=self.id,
            location=self.location,
            long_term_retention_backup_resource_id=self.long_term_retention_backup_resource_id,
            name=self.name,
            recoverable_database_id=self.recoverable_database_id,
            restorable_dropped_database_id=self.restorable_dropped_database_id,
            restore_point_in_time=self.restore_point_in_time,
            source_database_id=self.source_database_id,
            status=self.status,
            storage_container_sas_token=self.storage_container_sas_token,
            storage_container_uri=self.storage_container_uri,
            tags=self.tags,
            type=self.type)


def get_managed_database(database_name: Optional[str] = None,
                         managed_instance_name: Optional[str] = None,
                         resource_group_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetManagedDatabaseResult:
    """
    Use this data source to access information about an existing resource.

    :param str database_name: The name of the database.
    :param str managed_instance_name: The name of the managed instance.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    """
    __args__ = dict()
    __args__['databaseName'] = database_name
    __args__['managedInstanceName'] = managed_instance_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/v20190601preview:getManagedDatabase', __args__, opts=opts, typ=GetManagedDatabaseResult).value

    return AwaitableGetManagedDatabaseResult(
        catalog_collation=__ret__.catalog_collation,
        collation=__ret__.collation,
        create_mode=__ret__.create_mode,
        creation_date=__ret__.creation_date,
        default_secondary_location=__ret__.default_secondary_location,
        earliest_restore_point=__ret__.earliest_restore_point,
        failover_group_id=__ret__.failover_group_id,
        id=__ret__.id,
        location=__ret__.location,
        long_term_retention_backup_resource_id=__ret__.long_term_retention_backup_resource_id,
        name=__ret__.name,
        recoverable_database_id=__ret__.recoverable_database_id,
        restorable_dropped_database_id=__ret__.restorable_dropped_database_id,
        restore_point_in_time=__ret__.restore_point_in_time,
        source_database_id=__ret__.source_database_id,
        status=__ret__.status,
        storage_container_sas_token=__ret__.storage_container_sas_token,
        storage_container_uri=__ret__.storage_container_uri,
        tags=__ret__.tags,
        type=__ret__.type)
