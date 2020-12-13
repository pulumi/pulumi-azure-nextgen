// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The manged cluster resource
type ManagedCluster struct {
	pulumi.CustomResourceState

	// vm admin user password.
	AdminPassword pulumi.StringPtrOutput `pulumi:"adminPassword"`
	// vm admin user name.
	AdminUserName pulumi.StringOutput `pulumi:"adminUserName"`
	// Azure active directory.
	AzureActiveDirectory AzureActiveDirectoryResponsePtrOutput `pulumi:"azureActiveDirectory"`
	// The port used for client connections to the cluster.
	ClientConnectionPort pulumi.IntPtrOutput `pulumi:"clientConnectionPort"`
	// client certificates for the cluster.
	Clients ClientCertificateResponseArrayOutput `pulumi:"clients"`
	// The cluster certificate thumbprint used node to node communication.
	ClusterCertificateThumbprint pulumi.StringOutput `pulumi:"clusterCertificateThumbprint"`
	// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
	ClusterCodeVersion pulumi.StringPtrOutput `pulumi:"clusterCodeVersion"`
	// A service generated unique identifier for the cluster resource.
	ClusterId pulumi.StringOutput `pulumi:"clusterId"`
	// The current state of the cluster.
	//
	//   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
	//   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
	//   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
	//   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
	//   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
	//   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
	//   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
	//   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
	//   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
	//   - Ready - Indicates that the cluster is in a stable state.
	ClusterState pulumi.StringOutput `pulumi:"clusterState"`
	// Describes the policy used when upgrading the cluster.
	ClusterUpgradeDescription ClusterUpgradePolicyResponsePtrOutput `pulumi:"clusterUpgradeDescription"`
	// The upgrade mode of the cluster when new Service Fabric runtime version is available.
	//
	//   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	//   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	ClusterUpgradeMode pulumi.StringPtrOutput `pulumi:"clusterUpgradeMode"`
	// The cluster dns name.
	DnsName pulumi.StringOutput `pulumi:"dnsName"`
	// Azure resource etag.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The list of custom fabric settings to configure the cluster.
	FabricSettings SettingsSectionDescriptionResponseArrayOutput `pulumi:"fabricSettings"`
	// the cluster Fully qualified domain name.
	Fqdn pulumi.StringOutput `pulumi:"fqdn"`
	// The port used for http connections to the cluster.
	HttpGatewayConnectionPort pulumi.IntPtrOutput `pulumi:"httpGatewayConnectionPort"`
	// Describes load balancing rules.
	LoadBalancingRules LoadBalancingRuleResponseArrayOutput `pulumi:"loadBalancingRules"`
	// Azure resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Azure resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the managed cluster resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The sku of the managed cluster
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// Azure resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Azure resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewManagedCluster registers a new resource with the given unique name, arguments, and options.
func NewManagedCluster(ctx *pulumi.Context,
	name string, args *ManagedClusterArgs, opts ...pulumi.ResourceOption) (*ManagedCluster, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AdminUserName == nil {
		return nil, errors.New("invalid value for required argument 'AdminUserName'")
	}
	if args.ClusterName == nil {
		return nil, errors.New("invalid value for required argument 'ClusterName'")
	}
	if args.DnsName == nil {
		return nil, errors.New("invalid value for required argument 'DnsName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource ManagedCluster
	err := ctx.RegisterResource("azure-nextgen:servicefabric/v20200101preview:ManagedCluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagedCluster gets an existing ManagedCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagedCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagedClusterState, opts ...pulumi.ResourceOption) (*ManagedCluster, error) {
	var resource ManagedCluster
	err := ctx.ReadResource("azure-nextgen:servicefabric/v20200101preview:ManagedCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedCluster resources.
type managedClusterState struct {
	// vm admin user password.
	AdminPassword *string `pulumi:"adminPassword"`
	// vm admin user name.
	AdminUserName *string `pulumi:"adminUserName"`
	// Azure active directory.
	AzureActiveDirectory *AzureActiveDirectoryResponse `pulumi:"azureActiveDirectory"`
	// The port used for client connections to the cluster.
	ClientConnectionPort *int `pulumi:"clientConnectionPort"`
	// client certificates for the cluster.
	Clients []ClientCertificateResponse `pulumi:"clients"`
	// The cluster certificate thumbprint used node to node communication.
	ClusterCertificateThumbprint *string `pulumi:"clusterCertificateThumbprint"`
	// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
	ClusterCodeVersion *string `pulumi:"clusterCodeVersion"`
	// A service generated unique identifier for the cluster resource.
	ClusterId *string `pulumi:"clusterId"`
	// The current state of the cluster.
	//
	//   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
	//   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
	//   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
	//   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
	//   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
	//   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
	//   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
	//   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
	//   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
	//   - Ready - Indicates that the cluster is in a stable state.
	ClusterState *string `pulumi:"clusterState"`
	// Describes the policy used when upgrading the cluster.
	ClusterUpgradeDescription *ClusterUpgradePolicyResponse `pulumi:"clusterUpgradeDescription"`
	// The upgrade mode of the cluster when new Service Fabric runtime version is available.
	//
	//   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	//   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	ClusterUpgradeMode *string `pulumi:"clusterUpgradeMode"`
	// The cluster dns name.
	DnsName *string `pulumi:"dnsName"`
	// Azure resource etag.
	Etag *string `pulumi:"etag"`
	// The list of custom fabric settings to configure the cluster.
	FabricSettings []SettingsSectionDescriptionResponse `pulumi:"fabricSettings"`
	// the cluster Fully qualified domain name.
	Fqdn *string `pulumi:"fqdn"`
	// The port used for http connections to the cluster.
	HttpGatewayConnectionPort *int `pulumi:"httpGatewayConnectionPort"`
	// Describes load balancing rules.
	LoadBalancingRules []LoadBalancingRuleResponse `pulumi:"loadBalancingRules"`
	// Azure resource location.
	Location *string `pulumi:"location"`
	// Azure resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the managed cluster resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The sku of the managed cluster
	Sku *SkuResponse `pulumi:"sku"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type.
	Type *string `pulumi:"type"`
}

type ManagedClusterState struct {
	// vm admin user password.
	AdminPassword pulumi.StringPtrInput
	// vm admin user name.
	AdminUserName pulumi.StringPtrInput
	// Azure active directory.
	AzureActiveDirectory AzureActiveDirectoryResponsePtrInput
	// The port used for client connections to the cluster.
	ClientConnectionPort pulumi.IntPtrInput
	// client certificates for the cluster.
	Clients ClientCertificateResponseArrayInput
	// The cluster certificate thumbprint used node to node communication.
	ClusterCertificateThumbprint pulumi.StringPtrInput
	// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
	ClusterCodeVersion pulumi.StringPtrInput
	// A service generated unique identifier for the cluster resource.
	ClusterId pulumi.StringPtrInput
	// The current state of the cluster.
	//
	//   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
	//   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
	//   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
	//   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
	//   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
	//   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
	//   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
	//   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
	//   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
	//   - Ready - Indicates that the cluster is in a stable state.
	ClusterState pulumi.StringPtrInput
	// Describes the policy used when upgrading the cluster.
	ClusterUpgradeDescription ClusterUpgradePolicyResponsePtrInput
	// The upgrade mode of the cluster when new Service Fabric runtime version is available.
	//
	//   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	//   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	ClusterUpgradeMode pulumi.StringPtrInput
	// The cluster dns name.
	DnsName pulumi.StringPtrInput
	// Azure resource etag.
	Etag pulumi.StringPtrInput
	// The list of custom fabric settings to configure the cluster.
	FabricSettings SettingsSectionDescriptionResponseArrayInput
	// the cluster Fully qualified domain name.
	Fqdn pulumi.StringPtrInput
	// The port used for http connections to the cluster.
	HttpGatewayConnectionPort pulumi.IntPtrInput
	// Describes load balancing rules.
	LoadBalancingRules LoadBalancingRuleResponseArrayInput
	// Azure resource location.
	Location pulumi.StringPtrInput
	// Azure resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the managed cluster resource.
	ProvisioningState pulumi.StringPtrInput
	// The sku of the managed cluster
	Sku SkuResponsePtrInput
	// Azure resource tags.
	Tags pulumi.StringMapInput
	// Azure resource type.
	Type pulumi.StringPtrInput
}

func (ManagedClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedClusterState)(nil)).Elem()
}

type managedClusterArgs struct {
	// vm admin user password.
	AdminPassword *string `pulumi:"adminPassword"`
	// vm admin user name.
	AdminUserName string `pulumi:"adminUserName"`
	// Azure active directory.
	AzureActiveDirectory *AzureActiveDirectory `pulumi:"azureActiveDirectory"`
	// The port used for client connections to the cluster.
	ClientConnectionPort *int `pulumi:"clientConnectionPort"`
	// client certificates for the cluster.
	Clients []ClientCertificate `pulumi:"clients"`
	// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
	ClusterCodeVersion *string `pulumi:"clusterCodeVersion"`
	// The name of the cluster resource.
	ClusterName string `pulumi:"clusterName"`
	// Describes the policy used when upgrading the cluster.
	ClusterUpgradeDescription *ClusterUpgradePolicy `pulumi:"clusterUpgradeDescription"`
	// The upgrade mode of the cluster when new Service Fabric runtime version is available.
	//
	//   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	//   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	ClusterUpgradeMode *string `pulumi:"clusterUpgradeMode"`
	// The cluster dns name.
	DnsName string `pulumi:"dnsName"`
	// The list of custom fabric settings to configure the cluster.
	FabricSettings []SettingsSectionDescription `pulumi:"fabricSettings"`
	// The port used for http connections to the cluster.
	HttpGatewayConnectionPort *int `pulumi:"httpGatewayConnectionPort"`
	// Describes load balancing rules.
	LoadBalancingRules []LoadBalancingRule `pulumi:"loadBalancingRules"`
	// Azure resource location.
	Location string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The sku of the managed cluster
	Sku *Sku `pulumi:"sku"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ManagedCluster resource.
type ManagedClusterArgs struct {
	// vm admin user password.
	AdminPassword pulumi.StringPtrInput
	// vm admin user name.
	AdminUserName pulumi.StringInput
	// Azure active directory.
	AzureActiveDirectory AzureActiveDirectoryPtrInput
	// The port used for client connections to the cluster.
	ClientConnectionPort pulumi.IntPtrInput
	// client certificates for the cluster.
	Clients ClientCertificateArrayInput
	// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
	ClusterCodeVersion pulumi.StringPtrInput
	// The name of the cluster resource.
	ClusterName pulumi.StringInput
	// Describes the policy used when upgrading the cluster.
	ClusterUpgradeDescription ClusterUpgradePolicyPtrInput
	// The upgrade mode of the cluster when new Service Fabric runtime version is available.
	//
	//   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
	//   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
	ClusterUpgradeMode pulumi.StringPtrInput
	// The cluster dns name.
	DnsName pulumi.StringInput
	// The list of custom fabric settings to configure the cluster.
	FabricSettings SettingsSectionDescriptionArrayInput
	// The port used for http connections to the cluster.
	HttpGatewayConnectionPort pulumi.IntPtrInput
	// Describes load balancing rules.
	LoadBalancingRules LoadBalancingRuleArrayInput
	// Azure resource location.
	Location pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The sku of the managed cluster
	Sku SkuPtrInput
	// Azure resource tags.
	Tags pulumi.StringMapInput
}

func (ManagedClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managedClusterArgs)(nil)).Elem()
}

type ManagedClusterInput interface {
	pulumi.Input

	ToManagedClusterOutput() ManagedClusterOutput
	ToManagedClusterOutputWithContext(ctx context.Context) ManagedClusterOutput
}

func (ManagedCluster) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedCluster)(nil)).Elem()
}

func (i ManagedCluster) ToManagedClusterOutput() ManagedClusterOutput {
	return i.ToManagedClusterOutputWithContext(context.Background())
}

func (i ManagedCluster) ToManagedClusterOutputWithContext(ctx context.Context) ManagedClusterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedClusterOutput)
}

type ManagedClusterOutput struct {
	*pulumi.OutputState
}

func (ManagedClusterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedClusterOutput)(nil)).Elem()
}

func (o ManagedClusterOutput) ToManagedClusterOutput() ManagedClusterOutput {
	return o
}

func (o ManagedClusterOutput) ToManagedClusterOutputWithContext(ctx context.Context) ManagedClusterOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagedClusterOutput{})
}
