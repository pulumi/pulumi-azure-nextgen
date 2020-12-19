// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A lab.
// Latest API Version: 2018-09-15.
type Lab struct {
	pulumi.CustomResourceState

	// The properties of any lab announcement associated with this lab
	Announcement LabAnnouncementPropertiesResponsePtrOutput `pulumi:"announcement"`
	// The lab's artifact storage account.
	ArtifactsStorageAccount pulumi.StringOutput `pulumi:"artifactsStorageAccount"`
	// The creation date of the lab.
	CreatedDate pulumi.StringOutput `pulumi:"createdDate"`
	// The lab's default premium storage account.
	DefaultPremiumStorageAccount pulumi.StringOutput `pulumi:"defaultPremiumStorageAccount"`
	// The lab's default storage account.
	DefaultStorageAccount pulumi.StringOutput `pulumi:"defaultStorageAccount"`
	// The access rights to be granted to the user when provisioning an environment
	EnvironmentPermission pulumi.StringPtrOutput `pulumi:"environmentPermission"`
	// Extended properties of the lab used for experimental features
	ExtendedProperties pulumi.StringMapOutput `pulumi:"extendedProperties"`
	// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
	LabStorageType pulumi.StringPtrOutput `pulumi:"labStorageType"`
	// The load balancer used to for lab VMs that use shared IP address.
	LoadBalancerId pulumi.StringOutput `pulumi:"loadBalancerId"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsLinux pulumi.StringArrayOutput `pulumi:"mandatoryArtifactsResourceIdsLinux"`
	// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsWindows pulumi.StringArrayOutput `pulumi:"mandatoryArtifactsResourceIdsWindows"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
	NetworkSecurityGroupId pulumi.StringOutput `pulumi:"networkSecurityGroupId"`
	// The lab's premium data disk storage account.
	PremiumDataDiskStorageAccount pulumi.StringOutput `pulumi:"premiumDataDiskStorageAccount"`
	// The setting to enable usage of premium data disks.
	// When its value is 'Enabled', creation of standard or premium data disks is allowed.
	// When its value is 'Disabled', only creation of standard data disks is allowed.
	PremiumDataDisks pulumi.StringPtrOutput `pulumi:"premiumDataDisks"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The public IP address for the lab's load balancer.
	PublicIpId pulumi.StringOutput `pulumi:"publicIpId"`
	// The properties of any lab support message associated with this lab
	Support LabSupportPropertiesResponsePtrOutput `pulumi:"support"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringOutput `pulumi:"uniqueIdentifier"`
	// The lab's Key vault.
	VaultName pulumi.StringOutput `pulumi:"vaultName"`
	// The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
	VmCreationResourceGroup pulumi.StringOutput `pulumi:"vmCreationResourceGroup"`
}

// NewLab registers a new resource with the given unique name, arguments, and options.
func NewLab(ctx *pulumi.Context,
	name string, args *LabArgs, opts ...pulumi.ResourceOption) (*Lab, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20150521preview:Lab"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:Lab"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20180915:Lab"),
		},
	})
	opts = append(opts, aliases)
	var resource Lab
	err := ctx.RegisterResource("azure-nextgen:devtestlab/latest:Lab", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLab gets an existing Lab resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLab(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LabState, opts ...pulumi.ResourceOption) (*Lab, error) {
	var resource Lab
	err := ctx.ReadResource("azure-nextgen:devtestlab/latest:Lab", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Lab resources.
type labState struct {
	// The properties of any lab announcement associated with this lab
	Announcement *LabAnnouncementPropertiesResponse `pulumi:"announcement"`
	// The lab's artifact storage account.
	ArtifactsStorageAccount *string `pulumi:"artifactsStorageAccount"`
	// The creation date of the lab.
	CreatedDate *string `pulumi:"createdDate"`
	// The lab's default premium storage account.
	DefaultPremiumStorageAccount *string `pulumi:"defaultPremiumStorageAccount"`
	// The lab's default storage account.
	DefaultStorageAccount *string `pulumi:"defaultStorageAccount"`
	// The access rights to be granted to the user when provisioning an environment
	EnvironmentPermission *string `pulumi:"environmentPermission"`
	// Extended properties of the lab used for experimental features
	ExtendedProperties map[string]string `pulumi:"extendedProperties"`
	// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
	LabStorageType *string `pulumi:"labStorageType"`
	// The load balancer used to for lab VMs that use shared IP address.
	LoadBalancerId *string `pulumi:"loadBalancerId"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsLinux []string `pulumi:"mandatoryArtifactsResourceIdsLinux"`
	// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsWindows []string `pulumi:"mandatoryArtifactsResourceIdsWindows"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
	NetworkSecurityGroupId *string `pulumi:"networkSecurityGroupId"`
	// The lab's premium data disk storage account.
	PremiumDataDiskStorageAccount *string `pulumi:"premiumDataDiskStorageAccount"`
	// The setting to enable usage of premium data disks.
	// When its value is 'Enabled', creation of standard or premium data disks is allowed.
	// When its value is 'Disabled', only creation of standard data disks is allowed.
	PremiumDataDisks *string `pulumi:"premiumDataDisks"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address for the lab's load balancer.
	PublicIpId *string `pulumi:"publicIpId"`
	// The properties of any lab support message associated with this lab
	Support *LabSupportPropertiesResponse `pulumi:"support"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
	// The lab's Key vault.
	VaultName *string `pulumi:"vaultName"`
	// The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
	VmCreationResourceGroup *string `pulumi:"vmCreationResourceGroup"`
}

type LabState struct {
	// The properties of any lab announcement associated with this lab
	Announcement LabAnnouncementPropertiesResponsePtrInput
	// The lab's artifact storage account.
	ArtifactsStorageAccount pulumi.StringPtrInput
	// The creation date of the lab.
	CreatedDate pulumi.StringPtrInput
	// The lab's default premium storage account.
	DefaultPremiumStorageAccount pulumi.StringPtrInput
	// The lab's default storage account.
	DefaultStorageAccount pulumi.StringPtrInput
	// The access rights to be granted to the user when provisioning an environment
	EnvironmentPermission pulumi.StringPtrInput
	// Extended properties of the lab used for experimental features
	ExtendedProperties pulumi.StringMapInput
	// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
	LabStorageType pulumi.StringPtrInput
	// The load balancer used to for lab VMs that use shared IP address.
	LoadBalancerId pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsLinux pulumi.StringArrayInput
	// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsWindows pulumi.StringArrayInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
	NetworkSecurityGroupId pulumi.StringPtrInput
	// The lab's premium data disk storage account.
	PremiumDataDiskStorageAccount pulumi.StringPtrInput
	// The setting to enable usage of premium data disks.
	// When its value is 'Enabled', creation of standard or premium data disks is allowed.
	// When its value is 'Disabled', only creation of standard data disks is allowed.
	PremiumDataDisks pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address for the lab's load balancer.
	PublicIpId pulumi.StringPtrInput
	// The properties of any lab support message associated with this lab
	Support LabSupportPropertiesResponsePtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
	// The lab's Key vault.
	VaultName pulumi.StringPtrInput
	// The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
	VmCreationResourceGroup pulumi.StringPtrInput
}

func (LabState) ElementType() reflect.Type {
	return reflect.TypeOf((*labState)(nil)).Elem()
}

type labArgs struct {
	// The properties of any lab announcement associated with this lab
	Announcement *LabAnnouncementProperties `pulumi:"announcement"`
	// The access rights to be granted to the user when provisioning an environment
	EnvironmentPermission *string `pulumi:"environmentPermission"`
	// Extended properties of the lab used for experimental features
	ExtendedProperties map[string]string `pulumi:"extendedProperties"`
	// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
	LabStorageType *string `pulumi:"labStorageType"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsLinux []string `pulumi:"mandatoryArtifactsResourceIdsLinux"`
	// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsWindows []string `pulumi:"mandatoryArtifactsResourceIdsWindows"`
	// The name of the lab.
	Name string `pulumi:"name"`
	// The setting to enable usage of premium data disks.
	// When its value is 'Enabled', creation of standard or premium data disks is allowed.
	// When its value is 'Disabled', only creation of standard data disks is allowed.
	PremiumDataDisks *string `pulumi:"premiumDataDisks"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The properties of any lab support message associated with this lab
	Support *LabSupportProperties `pulumi:"support"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Lab resource.
type LabArgs struct {
	// The properties of any lab announcement associated with this lab
	Announcement LabAnnouncementPropertiesPtrInput
	// The access rights to be granted to the user when provisioning an environment
	EnvironmentPermission pulumi.StringPtrInput
	// Extended properties of the lab used for experimental features
	ExtendedProperties pulumi.StringMapInput
	// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
	LabStorageType pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsLinux pulumi.StringArrayInput
	// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
	MandatoryArtifactsResourceIdsWindows pulumi.StringArrayInput
	// The name of the lab.
	Name pulumi.StringInput
	// The setting to enable usage of premium data disks.
	// When its value is 'Enabled', creation of standard or premium data disks is allowed.
	// When its value is 'Disabled', only creation of standard data disks is allowed.
	PremiumDataDisks pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The properties of any lab support message associated with this lab
	Support LabSupportPropertiesPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
}

func (LabArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*labArgs)(nil)).Elem()
}

type LabInput interface {
	pulumi.Input

	ToLabOutput() LabOutput
	ToLabOutputWithContext(ctx context.Context) LabOutput
}

func (*Lab) ElementType() reflect.Type {
	return reflect.TypeOf((*Lab)(nil))
}

func (i *Lab) ToLabOutput() LabOutput {
	return i.ToLabOutputWithContext(context.Background())
}

func (i *Lab) ToLabOutputWithContext(ctx context.Context) LabOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LabOutput)
}

type LabOutput struct {
	*pulumi.OutputState
}

func (LabOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Lab)(nil))
}

func (o LabOutput) ToLabOutput() LabOutput {
	return o
}

func (o LabOutput) ToLabOutputWithContext(ctx context.Context) LabOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(LabOutput{})
}
