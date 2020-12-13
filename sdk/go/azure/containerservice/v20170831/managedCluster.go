// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170831

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Managed cluster.
type ManagedCluster struct {
	pulumi.CustomResourceState

	// Properties of the agent pool.
	AgentPoolProfiles ContainerServiceAgentPoolProfileResponseArrayOutput `pulumi:"agentPoolProfiles"`
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix pulumi.StringPtrOutput `pulumi:"dnsPrefix"`
	// FQDN for the master pool.
	Fqdn pulumi.StringOutput `pulumi:"fqdn"`
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion pulumi.StringPtrOutput `pulumi:"kubernetesVersion"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile ContainerServiceLinuxProfileResponsePtrOutput `pulumi:"linuxProfile"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
	ServicePrincipalProfile ContainerServiceServicePrincipalProfileResponsePtrOutput `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewManagedCluster registers a new resource with the given unique name, arguments, and options.
func NewManagedCluster(ctx *pulumi.Context,
	name string, args *ManagedClusterArgs, opts ...pulumi.ResourceOption) (*ManagedCluster, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerservice/latest:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20180331:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20180801preview:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20190201:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20190401:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20190601:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20190801:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20191001:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20191101:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200101:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200201:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200301:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200401:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200601:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200701:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200901:ManagedCluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20201101:ManagedCluster"),
		},
	})
	opts = append(opts, aliases)
	var resource ManagedCluster
	err := ctx.RegisterResource("azure-nextgen:containerservice/v20170831:ManagedCluster", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:containerservice/v20170831:ManagedCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedCluster resources.
type managedClusterState struct {
	// Properties of the agent pool.
	AgentPoolProfiles []ContainerServiceAgentPoolProfileResponse `pulumi:"agentPoolProfiles"`
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix *string `pulumi:"dnsPrefix"`
	// FQDN for the master pool.
	Fqdn *string `pulumi:"fqdn"`
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion *string `pulumi:"kubernetesVersion"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile *ContainerServiceLinuxProfileResponse `pulumi:"linuxProfile"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
	ServicePrincipalProfile *ContainerServiceServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ManagedClusterState struct {
	// Properties of the agent pool.
	AgentPoolProfiles ContainerServiceAgentPoolProfileResponseArrayInput
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix pulumi.StringPtrInput
	// FQDN for the master pool.
	Fqdn pulumi.StringPtrInput
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion pulumi.StringPtrInput
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile ContainerServiceLinuxProfileResponsePtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringPtrInput
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
	ServicePrincipalProfile ContainerServiceServicePrincipalProfileResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ManagedClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedClusterState)(nil)).Elem()
}

type managedClusterArgs struct {
	// Properties of the agent pool.
	AgentPoolProfiles []ContainerServiceAgentPoolProfile `pulumi:"agentPoolProfiles"`
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix *string `pulumi:"dnsPrefix"`
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion *string `pulumi:"kubernetesVersion"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile *ContainerServiceLinuxProfile `pulumi:"linuxProfile"`
	// Resource location
	Location string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the managed cluster resource.
	ResourceName string `pulumi:"resourceName"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
	ServicePrincipalProfile *ContainerServiceServicePrincipalProfile `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ManagedCluster resource.
type ManagedClusterArgs struct {
	// Properties of the agent pool.
	AgentPoolProfiles ContainerServiceAgentPoolProfileArrayInput
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix pulumi.StringPtrInput
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion pulumi.StringPtrInput
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile ContainerServiceLinuxProfilePtrInput
	// Resource location
	Location pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the managed cluster resource.
	ResourceName pulumi.StringInput
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
	ServicePrincipalProfile ContainerServiceServicePrincipalProfilePtrInput
	// Resource tags
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
