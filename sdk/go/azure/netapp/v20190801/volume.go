// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Volume resource
type Volume struct {
	pulumi.CustomResourceState

	// Unique Baremetal Tenant Identifier.
	BaremetalTenantId pulumi.StringOutput `pulumi:"baremetalTenantId"`
	// A unique file path for the volume. Used when creating mount targets
	CreationToken pulumi.StringOutput `pulumi:"creationToken"`
	// DataProtection volume, can have a replication object
	DataProtection VolumePropertiesResponseDataProtectionPtrOutput `pulumi:"dataProtection"`
	// Set of export policy rules
	ExportPolicy VolumePropertiesResponseExportPolicyPtrOutput `pulumi:"exportPolicy"`
	// Unique FileSystem Identifier.
	FileSystemId pulumi.StringOutput `pulumi:"fileSystemId"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// List of mount targets
	MountTargets MountTargetPropertiesResponseArrayOutput `pulumi:"mountTargets"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Set of protocol types
	ProtocolTypes pulumi.StringArrayOutput `pulumi:"protocolTypes"`
	// Azure lifecycle management
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The service level of the file system
	ServiceLevel pulumi.StringPtrOutput `pulumi:"serviceLevel"`
	// UUID v4 or resource identifier used to identify the Snapshot.
	SnapshotId pulumi.StringPtrOutput `pulumi:"snapshotId"`
	// The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
	SubnetId pulumi.StringOutput `pulumi:"subnetId"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
	UsageThreshold pulumi.IntOutput `pulumi:"usageThreshold"`
	// What type of volume is this
	VolumeType pulumi.StringPtrOutput `pulumi:"volumeType"`
}

// NewVolume registers a new resource with the given unique name, arguments, and options.
func NewVolume(ctx *pulumi.Context,
	name string, args *VolumeArgs, opts ...pulumi.ResourceOption) (*Volume, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.CreationToken == nil {
		return nil, errors.New("invalid value for required argument 'CreationToken'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.PoolName == nil {
		return nil, errors.New("invalid value for required argument 'PoolName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SubnetId == nil {
		return nil, errors.New("invalid value for required argument 'SubnetId'")
	}
	if args.UsageThreshold == nil {
		return nil, errors.New("invalid value for required argument 'UsageThreshold'")
	}
	if args.VolumeName == nil {
		return nil, errors.New("invalid value for required argument 'VolumeName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:netapp/latest:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20170815:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20190501:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20190601:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20190701:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20191001:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20191101:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200201:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200301:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200501:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200601:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200701:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200801:Volume"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200901:Volume"),
		},
	})
	opts = append(opts, aliases)
	var resource Volume
	err := ctx.RegisterResource("azure-nextgen:netapp/v20190801:Volume", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVolume gets an existing Volume resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVolume(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VolumeState, opts ...pulumi.ResourceOption) (*Volume, error) {
	var resource Volume
	err := ctx.ReadResource("azure-nextgen:netapp/v20190801:Volume", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Volume resources.
type volumeState struct {
	// Unique Baremetal Tenant Identifier.
	BaremetalTenantId *string `pulumi:"baremetalTenantId"`
	// A unique file path for the volume. Used when creating mount targets
	CreationToken *string `pulumi:"creationToken"`
	// DataProtection volume, can have a replication object
	DataProtection *VolumePropertiesResponseDataProtection `pulumi:"dataProtection"`
	// Set of export policy rules
	ExportPolicy *VolumePropertiesResponseExportPolicy `pulumi:"exportPolicy"`
	// Unique FileSystem Identifier.
	FileSystemId *string `pulumi:"fileSystemId"`
	// Resource location
	Location *string `pulumi:"location"`
	// List of mount targets
	MountTargets []MountTargetPropertiesResponse `pulumi:"mountTargets"`
	// Resource name
	Name *string `pulumi:"name"`
	// Set of protocol types
	ProtocolTypes []string `pulumi:"protocolTypes"`
	// Azure lifecycle management
	ProvisioningState *string `pulumi:"provisioningState"`
	// The service level of the file system
	ServiceLevel *string `pulumi:"serviceLevel"`
	// UUID v4 or resource identifier used to identify the Snapshot.
	SnapshotId *string `pulumi:"snapshotId"`
	// The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
	SubnetId *string `pulumi:"subnetId"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
	UsageThreshold *int `pulumi:"usageThreshold"`
	// What type of volume is this
	VolumeType *string `pulumi:"volumeType"`
}

type VolumeState struct {
	// Unique Baremetal Tenant Identifier.
	BaremetalTenantId pulumi.StringPtrInput
	// A unique file path for the volume. Used when creating mount targets
	CreationToken pulumi.StringPtrInput
	// DataProtection volume, can have a replication object
	DataProtection VolumePropertiesResponseDataProtectionPtrInput
	// Set of export policy rules
	ExportPolicy VolumePropertiesResponseExportPolicyPtrInput
	// Unique FileSystem Identifier.
	FileSystemId pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// List of mount targets
	MountTargets MountTargetPropertiesResponseArrayInput
	// Resource name
	Name pulumi.StringPtrInput
	// Set of protocol types
	ProtocolTypes pulumi.StringArrayInput
	// Azure lifecycle management
	ProvisioningState pulumi.StringPtrInput
	// The service level of the file system
	ServiceLevel pulumi.StringPtrInput
	// UUID v4 or resource identifier used to identify the Snapshot.
	SnapshotId pulumi.StringPtrInput
	// The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
	SubnetId pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
	UsageThreshold pulumi.IntPtrInput
	// What type of volume is this
	VolumeType pulumi.StringPtrInput
}

func (VolumeState) ElementType() reflect.Type {
	return reflect.TypeOf((*volumeState)(nil)).Elem()
}

type volumeArgs struct {
	// The name of the NetApp account
	AccountName string `pulumi:"accountName"`
	// A unique file path for the volume. Used when creating mount targets
	CreationToken string `pulumi:"creationToken"`
	// DataProtection volume, can have a replication object
	DataProtection *VolumePropertiesDataProtection `pulumi:"dataProtection"`
	// Set of export policy rules
	ExportPolicy *VolumePropertiesExportPolicy `pulumi:"exportPolicy"`
	// Resource location
	Location string `pulumi:"location"`
	// List of mount targets
	MountTargets []MountTargetProperties `pulumi:"mountTargets"`
	// The name of the capacity pool
	PoolName string `pulumi:"poolName"`
	// Set of protocol types
	ProtocolTypes []string `pulumi:"protocolTypes"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The service level of the file system
	ServiceLevel *string `pulumi:"serviceLevel"`
	// UUID v4 or resource identifier used to identify the Snapshot.
	SnapshotId *string `pulumi:"snapshotId"`
	// The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
	SubnetId string `pulumi:"subnetId"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
	UsageThreshold int `pulumi:"usageThreshold"`
	// The name of the volume
	VolumeName string `pulumi:"volumeName"`
	// What type of volume is this
	VolumeType *string `pulumi:"volumeType"`
}

// The set of arguments for constructing a Volume resource.
type VolumeArgs struct {
	// The name of the NetApp account
	AccountName pulumi.StringInput
	// A unique file path for the volume. Used when creating mount targets
	CreationToken pulumi.StringInput
	// DataProtection volume, can have a replication object
	DataProtection VolumePropertiesDataProtectionPtrInput
	// Set of export policy rules
	ExportPolicy VolumePropertiesExportPolicyPtrInput
	// Resource location
	Location pulumi.StringInput
	// List of mount targets
	MountTargets MountTargetPropertiesArrayInput
	// The name of the capacity pool
	PoolName pulumi.StringInput
	// Set of protocol types
	ProtocolTypes pulumi.StringArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The service level of the file system
	ServiceLevel pulumi.StringPtrInput
	// UUID v4 or resource identifier used to identify the Snapshot.
	SnapshotId pulumi.StringPtrInput
	// The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
	SubnetId pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
	UsageThreshold pulumi.IntInput
	// The name of the volume
	VolumeName pulumi.StringInput
	// What type of volume is this
	VolumeType pulumi.StringPtrInput
}

func (VolumeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*volumeArgs)(nil)).Elem()
}

type VolumeInput interface {
	pulumi.Input

	ToVolumeOutput() VolumeOutput
	ToVolumeOutputWithContext(ctx context.Context) VolumeOutput
}

func (*Volume) ElementType() reflect.Type {
	return reflect.TypeOf((*Volume)(nil))
}

func (i *Volume) ToVolumeOutput() VolumeOutput {
	return i.ToVolumeOutputWithContext(context.Background())
}

func (i *Volume) ToVolumeOutputWithContext(ctx context.Context) VolumeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VolumeOutput)
}

type VolumeOutput struct {
	*pulumi.OutputState
}

func (VolumeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Volume)(nil))
}

func (o VolumeOutput) ToVolumeOutput() VolumeOutput {
	return o
}

func (o VolumeOutput) ToVolumeOutputWithContext(ctx context.Context) VolumeOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VolumeOutput{})
}
