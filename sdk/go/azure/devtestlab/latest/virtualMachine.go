// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A virtual machine.
type VirtualMachine struct {
	pulumi.CustomResourceState

	// Indicates whether another user can take ownership of the virtual machine
	AllowClaim pulumi.BoolPtrOutput `pulumi:"allowClaim"`
	// The applicable schedule for the virtual machine.
	ApplicableSchedule ApplicableScheduleResponseOutput `pulumi:"applicableSchedule"`
	// The artifact deployment status for the virtual machine.
	ArtifactDeploymentStatus ArtifactDeploymentStatusPropertiesResponsePtrOutput `pulumi:"artifactDeploymentStatus"`
	// The artifacts to be installed on the virtual machine.
	Artifacts ArtifactInstallPropertiesResponseArrayOutput `pulumi:"artifacts"`
	// The resource identifier (Microsoft.Compute) of the virtual machine.
	ComputeId pulumi.StringPtrOutput `pulumi:"computeId"`
	// The compute virtual machine properties.
	ComputeVm ComputeVmPropertiesResponseOutput `pulumi:"computeVm"`
	// The email address of creator of the virtual machine.
	CreatedByUser pulumi.StringPtrOutput `pulumi:"createdByUser"`
	// The object identifier of the creator of the virtual machine.
	CreatedByUserId pulumi.StringPtrOutput `pulumi:"createdByUserId"`
	// The creation date of the virtual machine.
	CreatedDate pulumi.StringPtrOutput `pulumi:"createdDate"`
	// The custom image identifier of the virtual machine.
	CustomImageId pulumi.StringPtrOutput `pulumi:"customImageId"`
	// New or existing data disks to attach to the virtual machine after creation
	DataDiskParameters DataDiskPropertiesResponseArrayOutput `pulumi:"dataDiskParameters"`
	// Indicates whether the virtual machine is to be created without a public IP address.
	DisallowPublicIpAddress pulumi.BoolPtrOutput `pulumi:"disallowPublicIpAddress"`
	// The resource ID of the environment that contains this virtual machine, if any.
	EnvironmentId pulumi.StringPtrOutput `pulumi:"environmentId"`
	// The expiration date for VM.
	ExpirationDate pulumi.StringPtrOutput `pulumi:"expirationDate"`
	// The fully-qualified domain name of the virtual machine.
	Fqdn pulumi.StringPtrOutput `pulumi:"fqdn"`
	// The Microsoft Azure Marketplace image reference of the virtual machine.
	GalleryImageReference GalleryImageReferenceResponsePtrOutput `pulumi:"galleryImageReference"`
	// Indicates whether this virtual machine uses an SSH key for authentication.
	IsAuthenticationWithSshKey pulumi.BoolPtrOutput `pulumi:"isAuthenticationWithSshKey"`
	// The lab subnet name of the virtual machine.
	LabSubnetName pulumi.StringPtrOutput `pulumi:"labSubnetName"`
	// The lab virtual network identifier of the virtual machine.
	LabVirtualNetworkId pulumi.StringPtrOutput `pulumi:"labVirtualNetworkId"`
	// Last known compute power state captured in DTL
	LastKnownPowerState pulumi.StringPtrOutput `pulumi:"lastKnownPowerState"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The network interface properties.
	NetworkInterface NetworkInterfacePropertiesResponsePtrOutput `pulumi:"networkInterface"`
	// The notes of the virtual machine.
	Notes pulumi.StringPtrOutput `pulumi:"notes"`
	// The OS type of the virtual machine.
	OsType pulumi.StringPtrOutput `pulumi:"osType"`
	// The object identifier of the owner of the virtual machine.
	OwnerObjectId pulumi.StringPtrOutput `pulumi:"ownerObjectId"`
	// The user principal name of the virtual machine owner.
	OwnerUserPrincipalName pulumi.StringPtrOutput `pulumi:"ownerUserPrincipalName"`
	// The password of the virtual machine administrator.
	Password pulumi.StringPtrOutput `pulumi:"password"`
	// The id of the plan associated with the virtual machine image
	PlanId pulumi.StringPtrOutput `pulumi:"planId"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Virtual Machine schedules to be created
	ScheduleParameters ScheduleCreationParameterResponseArrayOutput `pulumi:"scheduleParameters"`
	// The size of the virtual machine.
	Size pulumi.StringPtrOutput `pulumi:"size"`
	// The SSH key of the virtual machine administrator.
	SshKey pulumi.StringPtrOutput `pulumi:"sshKey"`
	// Storage type to use for virtual machine (i.e. Standard, Premium).
	StorageType pulumi.StringPtrOutput `pulumi:"storageType"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringOutput `pulumi:"uniqueIdentifier"`
	// The user name of the virtual machine.
	UserName pulumi.StringPtrOutput `pulumi:"userName"`
	// Tells source of creation of lab virtual machine. Output property only.
	VirtualMachineCreationSource pulumi.StringPtrOutput `pulumi:"virtualMachineCreationSource"`
}

// NewVirtualMachine registers a new resource with the given unique name, arguments, and options.
func NewVirtualMachine(ctx *pulumi.Context,
	name string, args *VirtualMachineArgs, opts ...pulumi.ResourceOption) (*VirtualMachine, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LabName == nil {
		return nil, errors.New("invalid value for required argument 'LabName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20150521preview:VirtualMachine"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:VirtualMachine"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20180915:VirtualMachine"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualMachine
	err := ctx.RegisterResource("azure-nextgen:devtestlab/latest:VirtualMachine", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualMachine gets an existing VirtualMachine resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualMachine(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualMachineState, opts ...pulumi.ResourceOption) (*VirtualMachine, error) {
	var resource VirtualMachine
	err := ctx.ReadResource("azure-nextgen:devtestlab/latest:VirtualMachine", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualMachine resources.
type virtualMachineState struct {
	// Indicates whether another user can take ownership of the virtual machine
	AllowClaim *bool `pulumi:"allowClaim"`
	// The applicable schedule for the virtual machine.
	ApplicableSchedule *ApplicableScheduleResponse `pulumi:"applicableSchedule"`
	// The artifact deployment status for the virtual machine.
	ArtifactDeploymentStatus *ArtifactDeploymentStatusPropertiesResponse `pulumi:"artifactDeploymentStatus"`
	// The artifacts to be installed on the virtual machine.
	Artifacts []ArtifactInstallPropertiesResponse `pulumi:"artifacts"`
	// The resource identifier (Microsoft.Compute) of the virtual machine.
	ComputeId *string `pulumi:"computeId"`
	// The compute virtual machine properties.
	ComputeVm *ComputeVmPropertiesResponse `pulumi:"computeVm"`
	// The email address of creator of the virtual machine.
	CreatedByUser *string `pulumi:"createdByUser"`
	// The object identifier of the creator of the virtual machine.
	CreatedByUserId *string `pulumi:"createdByUserId"`
	// The creation date of the virtual machine.
	CreatedDate *string `pulumi:"createdDate"`
	// The custom image identifier of the virtual machine.
	CustomImageId *string `pulumi:"customImageId"`
	// New or existing data disks to attach to the virtual machine after creation
	DataDiskParameters []DataDiskPropertiesResponse `pulumi:"dataDiskParameters"`
	// Indicates whether the virtual machine is to be created without a public IP address.
	DisallowPublicIpAddress *bool `pulumi:"disallowPublicIpAddress"`
	// The resource ID of the environment that contains this virtual machine, if any.
	EnvironmentId *string `pulumi:"environmentId"`
	// The expiration date for VM.
	ExpirationDate *string `pulumi:"expirationDate"`
	// The fully-qualified domain name of the virtual machine.
	Fqdn *string `pulumi:"fqdn"`
	// The Microsoft Azure Marketplace image reference of the virtual machine.
	GalleryImageReference *GalleryImageReferenceResponse `pulumi:"galleryImageReference"`
	// Indicates whether this virtual machine uses an SSH key for authentication.
	IsAuthenticationWithSshKey *bool `pulumi:"isAuthenticationWithSshKey"`
	// The lab subnet name of the virtual machine.
	LabSubnetName *string `pulumi:"labSubnetName"`
	// The lab virtual network identifier of the virtual machine.
	LabVirtualNetworkId *string `pulumi:"labVirtualNetworkId"`
	// Last known compute power state captured in DTL
	LastKnownPowerState *string `pulumi:"lastKnownPowerState"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The network interface properties.
	NetworkInterface *NetworkInterfacePropertiesResponse `pulumi:"networkInterface"`
	// The notes of the virtual machine.
	Notes *string `pulumi:"notes"`
	// The OS type of the virtual machine.
	OsType *string `pulumi:"osType"`
	// The object identifier of the owner of the virtual machine.
	OwnerObjectId *string `pulumi:"ownerObjectId"`
	// The user principal name of the virtual machine owner.
	OwnerUserPrincipalName *string `pulumi:"ownerUserPrincipalName"`
	// The password of the virtual machine administrator.
	Password *string `pulumi:"password"`
	// The id of the plan associated with the virtual machine image
	PlanId *string `pulumi:"planId"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Virtual Machine schedules to be created
	ScheduleParameters []ScheduleCreationParameterResponse `pulumi:"scheduleParameters"`
	// The size of the virtual machine.
	Size *string `pulumi:"size"`
	// The SSH key of the virtual machine administrator.
	SshKey *string `pulumi:"sshKey"`
	// Storage type to use for virtual machine (i.e. Standard, Premium).
	StorageType *string `pulumi:"storageType"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
	// The user name of the virtual machine.
	UserName *string `pulumi:"userName"`
	// Tells source of creation of lab virtual machine. Output property only.
	VirtualMachineCreationSource *string `pulumi:"virtualMachineCreationSource"`
}

type VirtualMachineState struct {
	// Indicates whether another user can take ownership of the virtual machine
	AllowClaim pulumi.BoolPtrInput
	// The applicable schedule for the virtual machine.
	ApplicableSchedule ApplicableScheduleResponsePtrInput
	// The artifact deployment status for the virtual machine.
	ArtifactDeploymentStatus ArtifactDeploymentStatusPropertiesResponsePtrInput
	// The artifacts to be installed on the virtual machine.
	Artifacts ArtifactInstallPropertiesResponseArrayInput
	// The resource identifier (Microsoft.Compute) of the virtual machine.
	ComputeId pulumi.StringPtrInput
	// The compute virtual machine properties.
	ComputeVm ComputeVmPropertiesResponsePtrInput
	// The email address of creator of the virtual machine.
	CreatedByUser pulumi.StringPtrInput
	// The object identifier of the creator of the virtual machine.
	CreatedByUserId pulumi.StringPtrInput
	// The creation date of the virtual machine.
	CreatedDate pulumi.StringPtrInput
	// The custom image identifier of the virtual machine.
	CustomImageId pulumi.StringPtrInput
	// New or existing data disks to attach to the virtual machine after creation
	DataDiskParameters DataDiskPropertiesResponseArrayInput
	// Indicates whether the virtual machine is to be created without a public IP address.
	DisallowPublicIpAddress pulumi.BoolPtrInput
	// The resource ID of the environment that contains this virtual machine, if any.
	EnvironmentId pulumi.StringPtrInput
	// The expiration date for VM.
	ExpirationDate pulumi.StringPtrInput
	// The fully-qualified domain name of the virtual machine.
	Fqdn pulumi.StringPtrInput
	// The Microsoft Azure Marketplace image reference of the virtual machine.
	GalleryImageReference GalleryImageReferenceResponsePtrInput
	// Indicates whether this virtual machine uses an SSH key for authentication.
	IsAuthenticationWithSshKey pulumi.BoolPtrInput
	// The lab subnet name of the virtual machine.
	LabSubnetName pulumi.StringPtrInput
	// The lab virtual network identifier of the virtual machine.
	LabVirtualNetworkId pulumi.StringPtrInput
	// Last known compute power state captured in DTL
	LastKnownPowerState pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The network interface properties.
	NetworkInterface NetworkInterfacePropertiesResponsePtrInput
	// The notes of the virtual machine.
	Notes pulumi.StringPtrInput
	// The OS type of the virtual machine.
	OsType pulumi.StringPtrInput
	// The object identifier of the owner of the virtual machine.
	OwnerObjectId pulumi.StringPtrInput
	// The user principal name of the virtual machine owner.
	OwnerUserPrincipalName pulumi.StringPtrInput
	// The password of the virtual machine administrator.
	Password pulumi.StringPtrInput
	// The id of the plan associated with the virtual machine image
	PlanId pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// Virtual Machine schedules to be created
	ScheduleParameters ScheduleCreationParameterResponseArrayInput
	// The size of the virtual machine.
	Size pulumi.StringPtrInput
	// The SSH key of the virtual machine administrator.
	SshKey pulumi.StringPtrInput
	// Storage type to use for virtual machine (i.e. Standard, Premium).
	StorageType pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
	// The user name of the virtual machine.
	UserName pulumi.StringPtrInput
	// Tells source of creation of lab virtual machine. Output property only.
	VirtualMachineCreationSource pulumi.StringPtrInput
}

func (VirtualMachineState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineState)(nil)).Elem()
}

type virtualMachineArgs struct {
	// Indicates whether another user can take ownership of the virtual machine
	AllowClaim *bool `pulumi:"allowClaim"`
	// The artifact deployment status for the virtual machine.
	ArtifactDeploymentStatus *ArtifactDeploymentStatusProperties `pulumi:"artifactDeploymentStatus"`
	// The artifacts to be installed on the virtual machine.
	Artifacts []ArtifactInstallProperties `pulumi:"artifacts"`
	// The resource identifier (Microsoft.Compute) of the virtual machine.
	ComputeId *string `pulumi:"computeId"`
	// The email address of creator of the virtual machine.
	CreatedByUser *string `pulumi:"createdByUser"`
	// The object identifier of the creator of the virtual machine.
	CreatedByUserId *string `pulumi:"createdByUserId"`
	// The creation date of the virtual machine.
	CreatedDate *string `pulumi:"createdDate"`
	// The custom image identifier of the virtual machine.
	CustomImageId *string `pulumi:"customImageId"`
	// New or existing data disks to attach to the virtual machine after creation
	DataDiskParameters []DataDiskProperties `pulumi:"dataDiskParameters"`
	// Indicates whether the virtual machine is to be created without a public IP address.
	DisallowPublicIpAddress *bool `pulumi:"disallowPublicIpAddress"`
	// The resource ID of the environment that contains this virtual machine, if any.
	EnvironmentId *string `pulumi:"environmentId"`
	// The expiration date for VM.
	ExpirationDate *string `pulumi:"expirationDate"`
	// The fully-qualified domain name of the virtual machine.
	Fqdn *string `pulumi:"fqdn"`
	// The Microsoft Azure Marketplace image reference of the virtual machine.
	GalleryImageReference *GalleryImageReference `pulumi:"galleryImageReference"`
	// Indicates whether this virtual machine uses an SSH key for authentication.
	IsAuthenticationWithSshKey *bool `pulumi:"isAuthenticationWithSshKey"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The lab subnet name of the virtual machine.
	LabSubnetName *string `pulumi:"labSubnetName"`
	// The lab virtual network identifier of the virtual machine.
	LabVirtualNetworkId *string `pulumi:"labVirtualNetworkId"`
	// Last known compute power state captured in DTL
	LastKnownPowerState *string `pulumi:"lastKnownPowerState"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the virtual machine.
	Name string `pulumi:"name"`
	// The network interface properties.
	NetworkInterface *NetworkInterfaceProperties `pulumi:"networkInterface"`
	// The notes of the virtual machine.
	Notes *string `pulumi:"notes"`
	// The OS type of the virtual machine.
	OsType *string `pulumi:"osType"`
	// The object identifier of the owner of the virtual machine.
	OwnerObjectId *string `pulumi:"ownerObjectId"`
	// The user principal name of the virtual machine owner.
	OwnerUserPrincipalName *string `pulumi:"ownerUserPrincipalName"`
	// The password of the virtual machine administrator.
	Password *string `pulumi:"password"`
	// The id of the plan associated with the virtual machine image
	PlanId *string `pulumi:"planId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Virtual Machine schedules to be created
	ScheduleParameters []ScheduleCreationParameter `pulumi:"scheduleParameters"`
	// The size of the virtual machine.
	Size *string `pulumi:"size"`
	// The SSH key of the virtual machine administrator.
	SshKey *string `pulumi:"sshKey"`
	// Storage type to use for virtual machine (i.e. Standard, Premium).
	StorageType *string `pulumi:"storageType"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The user name of the virtual machine.
	UserName *string `pulumi:"userName"`
	// Tells source of creation of lab virtual machine. Output property only.
	VirtualMachineCreationSource *string `pulumi:"virtualMachineCreationSource"`
}

// The set of arguments for constructing a VirtualMachine resource.
type VirtualMachineArgs struct {
	// Indicates whether another user can take ownership of the virtual machine
	AllowClaim pulumi.BoolPtrInput
	// The artifact deployment status for the virtual machine.
	ArtifactDeploymentStatus ArtifactDeploymentStatusPropertiesPtrInput
	// The artifacts to be installed on the virtual machine.
	Artifacts ArtifactInstallPropertiesArrayInput
	// The resource identifier (Microsoft.Compute) of the virtual machine.
	ComputeId pulumi.StringPtrInput
	// The email address of creator of the virtual machine.
	CreatedByUser pulumi.StringPtrInput
	// The object identifier of the creator of the virtual machine.
	CreatedByUserId pulumi.StringPtrInput
	// The creation date of the virtual machine.
	CreatedDate pulumi.StringPtrInput
	// The custom image identifier of the virtual machine.
	CustomImageId pulumi.StringPtrInput
	// New or existing data disks to attach to the virtual machine after creation
	DataDiskParameters DataDiskPropertiesArrayInput
	// Indicates whether the virtual machine is to be created without a public IP address.
	DisallowPublicIpAddress pulumi.BoolPtrInput
	// The resource ID of the environment that contains this virtual machine, if any.
	EnvironmentId pulumi.StringPtrInput
	// The expiration date for VM.
	ExpirationDate pulumi.StringPtrInput
	// The fully-qualified domain name of the virtual machine.
	Fqdn pulumi.StringPtrInput
	// The Microsoft Azure Marketplace image reference of the virtual machine.
	GalleryImageReference GalleryImageReferencePtrInput
	// Indicates whether this virtual machine uses an SSH key for authentication.
	IsAuthenticationWithSshKey pulumi.BoolPtrInput
	// The name of the lab.
	LabName pulumi.StringInput
	// The lab subnet name of the virtual machine.
	LabSubnetName pulumi.StringPtrInput
	// The lab virtual network identifier of the virtual machine.
	LabVirtualNetworkId pulumi.StringPtrInput
	// Last known compute power state captured in DTL
	LastKnownPowerState pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the virtual machine.
	Name pulumi.StringInput
	// The network interface properties.
	NetworkInterface NetworkInterfacePropertiesPtrInput
	// The notes of the virtual machine.
	Notes pulumi.StringPtrInput
	// The OS type of the virtual machine.
	OsType pulumi.StringPtrInput
	// The object identifier of the owner of the virtual machine.
	OwnerObjectId pulumi.StringPtrInput
	// The user principal name of the virtual machine owner.
	OwnerUserPrincipalName pulumi.StringPtrInput
	// The password of the virtual machine administrator.
	Password pulumi.StringPtrInput
	// The id of the plan associated with the virtual machine image
	PlanId pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Virtual Machine schedules to be created
	ScheduleParameters ScheduleCreationParameterArrayInput
	// The size of the virtual machine.
	Size pulumi.StringPtrInput
	// The SSH key of the virtual machine administrator.
	SshKey pulumi.StringPtrInput
	// Storage type to use for virtual machine (i.e. Standard, Premium).
	StorageType pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The user name of the virtual machine.
	UserName pulumi.StringPtrInput
	// Tells source of creation of lab virtual machine. Output property only.
	VirtualMachineCreationSource pulumi.StringPtrInput
}

func (VirtualMachineArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineArgs)(nil)).Elem()
}

type VirtualMachineInput interface {
	pulumi.Input

	ToVirtualMachineOutput() VirtualMachineOutput
	ToVirtualMachineOutputWithContext(ctx context.Context) VirtualMachineOutput
}

func (VirtualMachine) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachine)(nil)).Elem()
}

func (i VirtualMachine) ToVirtualMachineOutput() VirtualMachineOutput {
	return i.ToVirtualMachineOutputWithContext(context.Background())
}

func (i VirtualMachine) ToVirtualMachineOutputWithContext(ctx context.Context) VirtualMachineOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualMachineOutput)
}

type VirtualMachineOutput struct {
	*pulumi.OutputState
}

func (VirtualMachineOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineOutput)(nil)).Elem()
}

func (o VirtualMachineOutput) ToVirtualMachineOutput() VirtualMachineOutput {
	return o
}

func (o VirtualMachineOutput) ToVirtualMachineOutputWithContext(ctx context.Context) VirtualMachineOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualMachineOutput{})
}
