# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetRedisResult',
    'AwaitableGetRedisResult',
    'get_redis',
]

@pulumi.output_type
class GetRedisResult:
    """
    A single Redis item in List or Get Operation.
    """
    def __init__(__self__, access_keys=None, enable_non_ssl_port=None, host_name=None, id=None, instances=None, linked_servers=None, location=None, minimum_tls_version=None, name=None, port=None, provisioning_state=None, redis_configuration=None, redis_version=None, replicas_per_master=None, shard_count=None, sku=None, ssl_port=None, static_ip=None, subnet_id=None, tags=None, tenant_settings=None, type=None, zones=None):
        if access_keys and not isinstance(access_keys, dict):
            raise TypeError("Expected argument 'access_keys' to be a dict")
        pulumi.set(__self__, "access_keys", access_keys)
        if enable_non_ssl_port and not isinstance(enable_non_ssl_port, bool):
            raise TypeError("Expected argument 'enable_non_ssl_port' to be a bool")
        pulumi.set(__self__, "enable_non_ssl_port", enable_non_ssl_port)
        if host_name and not isinstance(host_name, str):
            raise TypeError("Expected argument 'host_name' to be a str")
        pulumi.set(__self__, "host_name", host_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if instances and not isinstance(instances, list):
            raise TypeError("Expected argument 'instances' to be a list")
        pulumi.set(__self__, "instances", instances)
        if linked_servers and not isinstance(linked_servers, list):
            raise TypeError("Expected argument 'linked_servers' to be a list")
        pulumi.set(__self__, "linked_servers", linked_servers)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if minimum_tls_version and not isinstance(minimum_tls_version, str):
            raise TypeError("Expected argument 'minimum_tls_version' to be a str")
        pulumi.set(__self__, "minimum_tls_version", minimum_tls_version)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if port and not isinstance(port, int):
            raise TypeError("Expected argument 'port' to be a int")
        pulumi.set(__self__, "port", port)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if redis_configuration and not isinstance(redis_configuration, dict):
            raise TypeError("Expected argument 'redis_configuration' to be a dict")
        pulumi.set(__self__, "redis_configuration", redis_configuration)
        if redis_version and not isinstance(redis_version, str):
            raise TypeError("Expected argument 'redis_version' to be a str")
        pulumi.set(__self__, "redis_version", redis_version)
        if replicas_per_master and not isinstance(replicas_per_master, int):
            raise TypeError("Expected argument 'replicas_per_master' to be a int")
        pulumi.set(__self__, "replicas_per_master", replicas_per_master)
        if shard_count and not isinstance(shard_count, int):
            raise TypeError("Expected argument 'shard_count' to be a int")
        pulumi.set(__self__, "shard_count", shard_count)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if ssl_port and not isinstance(ssl_port, int):
            raise TypeError("Expected argument 'ssl_port' to be a int")
        pulumi.set(__self__, "ssl_port", ssl_port)
        if static_ip and not isinstance(static_ip, str):
            raise TypeError("Expected argument 'static_ip' to be a str")
        pulumi.set(__self__, "static_ip", static_ip)
        if subnet_id and not isinstance(subnet_id, str):
            raise TypeError("Expected argument 'subnet_id' to be a str")
        pulumi.set(__self__, "subnet_id", subnet_id)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if tenant_settings and not isinstance(tenant_settings, dict):
            raise TypeError("Expected argument 'tenant_settings' to be a dict")
        pulumi.set(__self__, "tenant_settings", tenant_settings)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if zones and not isinstance(zones, list):
            raise TypeError("Expected argument 'zones' to be a list")
        pulumi.set(__self__, "zones", zones)

    @property
    @pulumi.getter(name="accessKeys")
    def access_keys(self) -> 'outputs.RedisAccessKeysResponse':
        """
        The keys of the Redis cache - not set if this object is not the response to Create or Update redis cache
        """
        return pulumi.get(self, "access_keys")

    @property
    @pulumi.getter(name="enableNonSslPort")
    def enable_non_ssl_port(self) -> Optional[bool]:
        """
        Specifies whether the non-ssl Redis server port (6379) is enabled.
        """
        return pulumi.get(self, "enable_non_ssl_port")

    @property
    @pulumi.getter(name="hostName")
    def host_name(self) -> str:
        """
        Redis host name.
        """
        return pulumi.get(self, "host_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def instances(self) -> Sequence['outputs.RedisInstanceDetailsResponse']:
        """
        List of the Redis instances associated with the cache
        """
        return pulumi.get(self, "instances")

    @property
    @pulumi.getter(name="linkedServers")
    def linked_servers(self) -> Sequence['outputs.RedisLinkedServerResponse']:
        """
        List of the linked servers associated with the cache
        """
        return pulumi.get(self, "linked_servers")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The geo-location where the resource lives
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="minimumTlsVersion")
    def minimum_tls_version(self) -> Optional[str]:
        """
        Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
        """
        return pulumi.get(self, "minimum_tls_version")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def port(self) -> int:
        """
        Redis non-SSL port.
        """
        return pulumi.get(self, "port")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Redis instance provisioning status.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="redisConfiguration")
    def redis_configuration(self) -> Optional[Mapping[str, str]]:
        """
        All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
        """
        return pulumi.get(self, "redis_configuration")

    @property
    @pulumi.getter(name="redisVersion")
    def redis_version(self) -> str:
        """
        Redis version.
        """
        return pulumi.get(self, "redis_version")

    @property
    @pulumi.getter(name="replicasPerMaster")
    def replicas_per_master(self) -> Optional[int]:
        """
        The number of replicas to be created per master.
        """
        return pulumi.get(self, "replicas_per_master")

    @property
    @pulumi.getter(name="shardCount")
    def shard_count(self) -> Optional[int]:
        """
        The number of shards to be created on a Premium Cluster Cache.
        """
        return pulumi.get(self, "shard_count")

    @property
    @pulumi.getter
    def sku(self) -> 'outputs.SkuResponse':
        """
        The SKU of the Redis cache to deploy.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="sslPort")
    def ssl_port(self) -> int:
        """
        Redis SSL port.
        """
        return pulumi.get(self, "ssl_port")

    @property
    @pulumi.getter(name="staticIP")
    def static_ip(self) -> Optional[str]:
        """
        Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
        """
        return pulumi.get(self, "static_ip")

    @property
    @pulumi.getter(name="subnetId")
    def subnet_id(self) -> Optional[str]:
        """
        The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
        """
        return pulumi.get(self, "subnet_id")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="tenantSettings")
    def tenant_settings(self) -> Optional[Mapping[str, str]]:
        """
        A dictionary of tenant settings
        """
        return pulumi.get(self, "tenant_settings")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def zones(self) -> Optional[Sequence[str]]:
        """
        A list of availability zones denoting where the resource needs to come from.
        """
        return pulumi.get(self, "zones")


class AwaitableGetRedisResult(GetRedisResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRedisResult(
            access_keys=self.access_keys,
            enable_non_ssl_port=self.enable_non_ssl_port,
            host_name=self.host_name,
            id=self.id,
            instances=self.instances,
            linked_servers=self.linked_servers,
            location=self.location,
            minimum_tls_version=self.minimum_tls_version,
            name=self.name,
            port=self.port,
            provisioning_state=self.provisioning_state,
            redis_configuration=self.redis_configuration,
            redis_version=self.redis_version,
            replicas_per_master=self.replicas_per_master,
            shard_count=self.shard_count,
            sku=self.sku,
            ssl_port=self.ssl_port,
            static_ip=self.static_ip,
            subnet_id=self.subnet_id,
            tags=self.tags,
            tenant_settings=self.tenant_settings,
            type=self.type,
            zones=self.zones)


def get_redis(name: Optional[str] = None,
              resource_group_name: Optional[str] = None,
              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetRedisResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: The name of the Redis cache.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:cache/v20190701:getRedis', __args__, opts=opts, typ=GetRedisResult).value

    return AwaitableGetRedisResult(
        access_keys=__ret__.access_keys,
        enable_non_ssl_port=__ret__.enable_non_ssl_port,
        host_name=__ret__.host_name,
        id=__ret__.id,
        instances=__ret__.instances,
        linked_servers=__ret__.linked_servers,
        location=__ret__.location,
        minimum_tls_version=__ret__.minimum_tls_version,
        name=__ret__.name,
        port=__ret__.port,
        provisioning_state=__ret__.provisioning_state,
        redis_configuration=__ret__.redis_configuration,
        redis_version=__ret__.redis_version,
        replicas_per_master=__ret__.replicas_per_master,
        shard_count=__ret__.shard_count,
        sku=__ret__.sku,
        ssl_port=__ret__.ssl_port,
        static_ip=__ret__.static_ip,
        subnet_id=__ret__.subnet_id,
        tags=__ret__.tags,
        tenant_settings=__ret__.tenant_settings,
        type=__ret__.type,
        zones=__ret__.zones)
