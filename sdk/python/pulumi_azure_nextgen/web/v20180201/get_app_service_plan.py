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
    'GetAppServicePlanResult',
    'AwaitableGetAppServicePlanResult',
    'get_app_service_plan',
]

@pulumi.output_type
class GetAppServicePlanResult:
    """
    App Service plan.
    """
    def __init__(__self__, free_offer_expiration_time=None, geo_region=None, hosting_environment_profile=None, hyper_v=None, id=None, is_spot=None, is_xenon=None, kind=None, location=None, maximum_elastic_worker_count=None, maximum_number_of_workers=None, name=None, number_of_sites=None, per_site_scaling=None, provisioning_state=None, reserved=None, resource_group=None, sku=None, spot_expiration_time=None, status=None, subscription=None, tags=None, target_worker_count=None, target_worker_size_id=None, type=None, worker_tier_name=None):
        if free_offer_expiration_time and not isinstance(free_offer_expiration_time, str):
            raise TypeError("Expected argument 'free_offer_expiration_time' to be a str")
        pulumi.set(__self__, "free_offer_expiration_time", free_offer_expiration_time)
        if geo_region and not isinstance(geo_region, str):
            raise TypeError("Expected argument 'geo_region' to be a str")
        pulumi.set(__self__, "geo_region", geo_region)
        if hosting_environment_profile and not isinstance(hosting_environment_profile, dict):
            raise TypeError("Expected argument 'hosting_environment_profile' to be a dict")
        pulumi.set(__self__, "hosting_environment_profile", hosting_environment_profile)
        if hyper_v and not isinstance(hyper_v, bool):
            raise TypeError("Expected argument 'hyper_v' to be a bool")
        pulumi.set(__self__, "hyper_v", hyper_v)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if is_spot and not isinstance(is_spot, bool):
            raise TypeError("Expected argument 'is_spot' to be a bool")
        pulumi.set(__self__, "is_spot", is_spot)
        if is_xenon and not isinstance(is_xenon, bool):
            raise TypeError("Expected argument 'is_xenon' to be a bool")
        pulumi.set(__self__, "is_xenon", is_xenon)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if maximum_elastic_worker_count and not isinstance(maximum_elastic_worker_count, int):
            raise TypeError("Expected argument 'maximum_elastic_worker_count' to be a int")
        pulumi.set(__self__, "maximum_elastic_worker_count", maximum_elastic_worker_count)
        if maximum_number_of_workers and not isinstance(maximum_number_of_workers, int):
            raise TypeError("Expected argument 'maximum_number_of_workers' to be a int")
        pulumi.set(__self__, "maximum_number_of_workers", maximum_number_of_workers)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if number_of_sites and not isinstance(number_of_sites, int):
            raise TypeError("Expected argument 'number_of_sites' to be a int")
        pulumi.set(__self__, "number_of_sites", number_of_sites)
        if per_site_scaling and not isinstance(per_site_scaling, bool):
            raise TypeError("Expected argument 'per_site_scaling' to be a bool")
        pulumi.set(__self__, "per_site_scaling", per_site_scaling)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if reserved and not isinstance(reserved, bool):
            raise TypeError("Expected argument 'reserved' to be a bool")
        pulumi.set(__self__, "reserved", reserved)
        if resource_group and not isinstance(resource_group, str):
            raise TypeError("Expected argument 'resource_group' to be a str")
        pulumi.set(__self__, "resource_group", resource_group)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if spot_expiration_time and not isinstance(spot_expiration_time, str):
            raise TypeError("Expected argument 'spot_expiration_time' to be a str")
        pulumi.set(__self__, "spot_expiration_time", spot_expiration_time)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if subscription and not isinstance(subscription, str):
            raise TypeError("Expected argument 'subscription' to be a str")
        pulumi.set(__self__, "subscription", subscription)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if target_worker_count and not isinstance(target_worker_count, int):
            raise TypeError("Expected argument 'target_worker_count' to be a int")
        pulumi.set(__self__, "target_worker_count", target_worker_count)
        if target_worker_size_id and not isinstance(target_worker_size_id, int):
            raise TypeError("Expected argument 'target_worker_size_id' to be a int")
        pulumi.set(__self__, "target_worker_size_id", target_worker_size_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if worker_tier_name and not isinstance(worker_tier_name, str):
            raise TypeError("Expected argument 'worker_tier_name' to be a str")
        pulumi.set(__self__, "worker_tier_name", worker_tier_name)

    @property
    @pulumi.getter(name="freeOfferExpirationTime")
    def free_offer_expiration_time(self) -> Optional[str]:
        """
        The time when the server farm free offer expires.
        """
        return pulumi.get(self, "free_offer_expiration_time")

    @property
    @pulumi.getter(name="geoRegion")
    def geo_region(self) -> str:
        """
        Geographical location for the App Service plan.
        """
        return pulumi.get(self, "geo_region")

    @property
    @pulumi.getter(name="hostingEnvironmentProfile")
    def hosting_environment_profile(self) -> Optional['outputs.HostingEnvironmentProfileResponse']:
        """
        Specification for the App Service Environment to use for the App Service plan.
        """
        return pulumi.get(self, "hosting_environment_profile")

    @property
    @pulumi.getter(name="hyperV")
    def hyper_v(self) -> Optional[bool]:
        """
        If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
        """
        return pulumi.get(self, "hyper_v")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="isSpot")
    def is_spot(self) -> Optional[bool]:
        """
        If <code>true</code>, this App Service Plan owns spot instances.
        """
        return pulumi.get(self, "is_spot")

    @property
    @pulumi.getter(name="isXenon")
    def is_xenon(self) -> Optional[bool]:
        """
        Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
        """
        return pulumi.get(self, "is_xenon")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource Location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="maximumElasticWorkerCount")
    def maximum_elastic_worker_count(self) -> Optional[int]:
        """
        Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
        """
        return pulumi.get(self, "maximum_elastic_worker_count")

    @property
    @pulumi.getter(name="maximumNumberOfWorkers")
    def maximum_number_of_workers(self) -> int:
        """
        Maximum number of instances that can be assigned to this App Service plan.
        """
        return pulumi.get(self, "maximum_number_of_workers")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="numberOfSites")
    def number_of_sites(self) -> int:
        """
        Number of apps assigned to this App Service plan.
        """
        return pulumi.get(self, "number_of_sites")

    @property
    @pulumi.getter(name="perSiteScaling")
    def per_site_scaling(self) -> Optional[bool]:
        """
        If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
        If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
        """
        return pulumi.get(self, "per_site_scaling")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the App Service Environment.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def reserved(self) -> Optional[bool]:
        """
        If Linux app service plan <code>true</code>, <code>false</code> otherwise.
        """
        return pulumi.get(self, "reserved")

    @property
    @pulumi.getter(name="resourceGroup")
    def resource_group(self) -> str:
        """
        Resource group of the App Service plan.
        """
        return pulumi.get(self, "resource_group")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.SkuDescriptionResponse']:
        """
        Description of a SKU for a scalable resource.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="spotExpirationTime")
    def spot_expiration_time(self) -> Optional[str]:
        """
        The time when the server farm expires. Valid only if it is a spot server farm.
        """
        return pulumi.get(self, "spot_expiration_time")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        App Service plan status.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def subscription(self) -> str:
        """
        App Service plan subscription.
        """
        return pulumi.get(self, "subscription")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="targetWorkerCount")
    def target_worker_count(self) -> Optional[int]:
        """
        Scaling worker count.
        """
        return pulumi.get(self, "target_worker_count")

    @property
    @pulumi.getter(name="targetWorkerSizeId")
    def target_worker_size_id(self) -> Optional[int]:
        """
        Scaling worker size ID.
        """
        return pulumi.get(self, "target_worker_size_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="workerTierName")
    def worker_tier_name(self) -> Optional[str]:
        """
        Target worker tier assigned to the App Service plan.
        """
        return pulumi.get(self, "worker_tier_name")


class AwaitableGetAppServicePlanResult(GetAppServicePlanResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAppServicePlanResult(
            free_offer_expiration_time=self.free_offer_expiration_time,
            geo_region=self.geo_region,
            hosting_environment_profile=self.hosting_environment_profile,
            hyper_v=self.hyper_v,
            id=self.id,
            is_spot=self.is_spot,
            is_xenon=self.is_xenon,
            kind=self.kind,
            location=self.location,
            maximum_elastic_worker_count=self.maximum_elastic_worker_count,
            maximum_number_of_workers=self.maximum_number_of_workers,
            name=self.name,
            number_of_sites=self.number_of_sites,
            per_site_scaling=self.per_site_scaling,
            provisioning_state=self.provisioning_state,
            reserved=self.reserved,
            resource_group=self.resource_group,
            sku=self.sku,
            spot_expiration_time=self.spot_expiration_time,
            status=self.status,
            subscription=self.subscription,
            tags=self.tags,
            target_worker_count=self.target_worker_count,
            target_worker_size_id=self.target_worker_size_id,
            type=self.type,
            worker_tier_name=self.worker_tier_name)


def get_app_service_plan(name: Optional[str] = None,
                         resource_group_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetAppServicePlanResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: Name of the App Service plan.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/v20180201:getAppServicePlan', __args__, opts=opts, typ=GetAppServicePlanResult).value

    return AwaitableGetAppServicePlanResult(
        free_offer_expiration_time=__ret__.free_offer_expiration_time,
        geo_region=__ret__.geo_region,
        hosting_environment_profile=__ret__.hosting_environment_profile,
        hyper_v=__ret__.hyper_v,
        id=__ret__.id,
        is_spot=__ret__.is_spot,
        is_xenon=__ret__.is_xenon,
        kind=__ret__.kind,
        location=__ret__.location,
        maximum_elastic_worker_count=__ret__.maximum_elastic_worker_count,
        maximum_number_of_workers=__ret__.maximum_number_of_workers,
        name=__ret__.name,
        number_of_sites=__ret__.number_of_sites,
        per_site_scaling=__ret__.per_site_scaling,
        provisioning_state=__ret__.provisioning_state,
        reserved=__ret__.reserved,
        resource_group=__ret__.resource_group,
        sku=__ret__.sku,
        spot_expiration_time=__ret__.spot_expiration_time,
        status=__ret__.status,
        subscription=__ret__.subscription,
        tags=__ret__.tags,
        target_worker_count=__ret__.target_worker_count,
        target_worker_size_id=__ret__.target_worker_size_id,
        type=__ret__.type,
        worker_tier_name=__ret__.worker_tier_name)
