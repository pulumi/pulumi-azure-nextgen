# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'CacheSkuArgs',
    'ClfsTargetArgs',
    'NamespaceJunctionArgs',
    'Nfs3TargetArgs',
    'UnknownTargetArgs',
]

@pulumi.input_type
class CacheSkuArgs:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None):
        """
        Sku for the cache.
        :param pulumi.Input[str] name: Sku name for this cache.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Sku name for this cache.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)


@pulumi.input_type
class ClfsTargetArgs:
    def __init__(__self__, *,
                 target: Optional[pulumi.Input[str]] = None):
        """
        Storage container for use as a CLFS StorageTarget.
        :param pulumi.Input[str] target: URL of storage container.
        """
        if target is not None:
            pulumi.set(__self__, "target", target)

    @property
    @pulumi.getter
    def target(self) -> Optional[pulumi.Input[str]]:
        """
        URL of storage container.
        """
        return pulumi.get(self, "target")

    @target.setter
    def target(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "target", value)


@pulumi.input_type
class NamespaceJunctionArgs:
    def __init__(__self__, *,
                 namespace_path: Optional[pulumi.Input[str]] = None,
                 nfs_export: Optional[pulumi.Input[str]] = None,
                 target_path: Optional[pulumi.Input[str]] = None):
        """
        A namespace junction.
        :param pulumi.Input[str] namespace_path: Namespace path on a cache for a storage target.
        :param pulumi.Input[str] nfs_export: NFS export where targetPath exists.
        :param pulumi.Input[str] target_path: Path in storage target to which namespacePath points.
        """
        if namespace_path is not None:
            pulumi.set(__self__, "namespace_path", namespace_path)
        if nfs_export is not None:
            pulumi.set(__self__, "nfs_export", nfs_export)
        if target_path is not None:
            pulumi.set(__self__, "target_path", target_path)

    @property
    @pulumi.getter(name="namespacePath")
    def namespace_path(self) -> Optional[pulumi.Input[str]]:
        """
        Namespace path on a cache for a storage target.
        """
        return pulumi.get(self, "namespace_path")

    @namespace_path.setter
    def namespace_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "namespace_path", value)

    @property
    @pulumi.getter(name="nfsExport")
    def nfs_export(self) -> Optional[pulumi.Input[str]]:
        """
        NFS export where targetPath exists.
        """
        return pulumi.get(self, "nfs_export")

    @nfs_export.setter
    def nfs_export(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "nfs_export", value)

    @property
    @pulumi.getter(name="targetPath")
    def target_path(self) -> Optional[pulumi.Input[str]]:
        """
        Path in storage target to which namespacePath points.
        """
        return pulumi.get(self, "target_path")

    @target_path.setter
    def target_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "target_path", value)


@pulumi.input_type
class Nfs3TargetArgs:
    def __init__(__self__, *,
                 target: Optional[pulumi.Input[str]] = None,
                 usage_model: Optional[pulumi.Input[str]] = None):
        """
        An NFS mount point for use as a StorageTarget.
        :param pulumi.Input[str] target: IP or name of an NFS Storage Target host, ie: 10.0.44.44
        :param pulumi.Input[str] usage_model: Identifies the primary usage model to be used for this storage target.   GET choices from .../usageModels
        """
        if target is not None:
            pulumi.set(__self__, "target", target)
        if usage_model is not None:
            pulumi.set(__self__, "usage_model", usage_model)

    @property
    @pulumi.getter
    def target(self) -> Optional[pulumi.Input[str]]:
        """
        IP or name of an NFS Storage Target host, ie: 10.0.44.44
        """
        return pulumi.get(self, "target")

    @target.setter
    def target(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "target", value)

    @property
    @pulumi.getter(name="usageModel")
    def usage_model(self) -> Optional[pulumi.Input[str]]:
        """
        Identifies the primary usage model to be used for this storage target.   GET choices from .../usageModels
        """
        return pulumi.get(self, "usage_model")

    @usage_model.setter
    def usage_model(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "usage_model", value)


@pulumi.input_type
class UnknownTargetArgs:
    def __init__(__self__, *,
                 unknown_map: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None):
        """
        Storage container for use as a Unknown StorageTarget.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] unknown_map: Dictionary of string->string pairs containing information about the StorageTarget.
        """
        if unknown_map is not None:
            pulumi.set(__self__, "unknown_map", unknown_map)

    @property
    @pulumi.getter(name="unknownMap")
    def unknown_map(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        Dictionary of string->string pairs containing information about the StorageTarget.
        """
        return pulumi.get(self, "unknown_map")

    @unknown_map.setter
    def unknown_map(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "unknown_map", value)


