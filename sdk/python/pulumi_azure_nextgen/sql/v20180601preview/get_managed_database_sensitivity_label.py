# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetManagedDatabaseSensitivityLabelResult',
    'AwaitableGetManagedDatabaseSensitivityLabelResult',
    'get_managed_database_sensitivity_label',
]

@pulumi.output_type
class GetManagedDatabaseSensitivityLabelResult:
    """
    A sensitivity label.
    """
    def __init__(__self__, id=None, information_type=None, information_type_id=None, is_disabled=None, label_id=None, label_name=None, name=None, rank=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if information_type and not isinstance(information_type, str):
            raise TypeError("Expected argument 'information_type' to be a str")
        pulumi.set(__self__, "information_type", information_type)
        if information_type_id and not isinstance(information_type_id, str):
            raise TypeError("Expected argument 'information_type_id' to be a str")
        pulumi.set(__self__, "information_type_id", information_type_id)
        if is_disabled and not isinstance(is_disabled, bool):
            raise TypeError("Expected argument 'is_disabled' to be a bool")
        pulumi.set(__self__, "is_disabled", is_disabled)
        if label_id and not isinstance(label_id, str):
            raise TypeError("Expected argument 'label_id' to be a str")
        pulumi.set(__self__, "label_id", label_id)
        if label_name and not isinstance(label_name, str):
            raise TypeError("Expected argument 'label_name' to be a str")
        pulumi.set(__self__, "label_name", label_name)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if rank and not isinstance(rank, str):
            raise TypeError("Expected argument 'rank' to be a str")
        pulumi.set(__self__, "rank", rank)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="informationType")
    def information_type(self) -> Optional[str]:
        """
        The information type.
        """
        return pulumi.get(self, "information_type")

    @property
    @pulumi.getter(name="informationTypeId")
    def information_type_id(self) -> Optional[str]:
        """
        The information type ID.
        """
        return pulumi.get(self, "information_type_id")

    @property
    @pulumi.getter(name="isDisabled")
    def is_disabled(self) -> bool:
        """
        Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
        """
        return pulumi.get(self, "is_disabled")

    @property
    @pulumi.getter(name="labelId")
    def label_id(self) -> Optional[str]:
        """
        The label ID.
        """
        return pulumi.get(self, "label_id")

    @property
    @pulumi.getter(name="labelName")
    def label_name(self) -> Optional[str]:
        """
        The label name.
        """
        return pulumi.get(self, "label_name")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def rank(self) -> Optional[str]:
        return pulumi.get(self, "rank")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetManagedDatabaseSensitivityLabelResult(GetManagedDatabaseSensitivityLabelResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetManagedDatabaseSensitivityLabelResult(
            id=self.id,
            information_type=self.information_type,
            information_type_id=self.information_type_id,
            is_disabled=self.is_disabled,
            label_id=self.label_id,
            label_name=self.label_name,
            name=self.name,
            rank=self.rank,
            type=self.type)


def get_managed_database_sensitivity_label(column_name: Optional[str] = None,
                                           database_name: Optional[str] = None,
                                           managed_instance_name: Optional[str] = None,
                                           resource_group_name: Optional[str] = None,
                                           schema_name: Optional[str] = None,
                                           sensitivity_label_source: Optional[str] = None,
                                           table_name: Optional[str] = None,
                                           opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetManagedDatabaseSensitivityLabelResult:
    """
    Use this data source to access information about an existing resource.

    :param str column_name: The name of the column.
    :param str database_name: The name of the database.
    :param str managed_instance_name: The name of the managed instance.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    :param str schema_name: The name of the schema.
    :param str sensitivity_label_source: The source of the sensitivity label.
    :param str table_name: The name of the table.
    """
    __args__ = dict()
    __args__['columnName'] = column_name
    __args__['databaseName'] = database_name
    __args__['managedInstanceName'] = managed_instance_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['schemaName'] = schema_name
    __args__['sensitivityLabelSource'] = sensitivity_label_source
    __args__['tableName'] = table_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/v20180601preview:getManagedDatabaseSensitivityLabel', __args__, opts=opts, typ=GetManagedDatabaseSensitivityLabelResult).value

    return AwaitableGetManagedDatabaseSensitivityLabelResult(
        id=__ret__.id,
        information_type=__ret__.information_type,
        information_type_id=__ret__.information_type_id,
        is_disabled=__ret__.is_disabled,
        label_id=__ret__.label_id,
        label_name=__ret__.label_name,
        name=__ret__.name,
        rank=__ret__.rank,
        type=__ret__.type)
