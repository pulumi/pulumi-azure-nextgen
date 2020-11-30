// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Backup policy information
type BackupPolicy struct {
	pulumi.CustomResourceState

	// Daily backups count to keep
	DailyBackupsToKeep pulumi.IntPtrOutput `pulumi:"dailyBackupsToKeep"`
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Monthly backups count to keep
	MonthlyBackupsToKeep pulumi.IntPtrOutput `pulumi:"monthlyBackupsToKeep"`
	// Name of backup policy
	Name pulumi.StringOutput `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// A list of volumes assigned to this policy
	VolumeBackups VolumeBackupsResponseArrayOutput `pulumi:"volumeBackups"`
	// Volumes using current backup policy
	VolumesAssigned pulumi.IntPtrOutput `pulumi:"volumesAssigned"`
	// Weekly backups count to keep
	WeeklyBackupsToKeep pulumi.IntPtrOutput `pulumi:"weeklyBackupsToKeep"`
	// Yearly backups count to keep
	YearlyBackupsToKeep pulumi.IntPtrOutput `pulumi:"yearlyBackupsToKeep"`
}

// NewBackupPolicy registers a new resource with the given unique name, arguments, and options.
func NewBackupPolicy(ctx *pulumi.Context,
	name string, args *BackupPolicyArgs, opts ...pulumi.ResourceOption) (*BackupPolicy, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.BackupPolicyName == nil {
		return nil, errors.New("missing required argument 'BackupPolicyName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &BackupPolicyArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:netapp/latest:BackupPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200501:BackupPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200701:BackupPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200801:BackupPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource BackupPolicy
	err := ctx.RegisterResource("azure-nextgen:netapp/v20200601:BackupPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBackupPolicy gets an existing BackupPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBackupPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BackupPolicyState, opts ...pulumi.ResourceOption) (*BackupPolicy, error) {
	var resource BackupPolicy
	err := ctx.ReadResource("azure-nextgen:netapp/v20200601:BackupPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering BackupPolicy resources.
type backupPolicyState struct {
	// Daily backups count to keep
	DailyBackupsToKeep *int `pulumi:"dailyBackupsToKeep"`
	// The property to decide policy is enabled or not
	Enabled *bool `pulumi:"enabled"`
	// Resource location
	Location *string `pulumi:"location"`
	// Monthly backups count to keep
	MonthlyBackupsToKeep *int `pulumi:"monthlyBackupsToKeep"`
	// Name of backup policy
	Name *string `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// A list of volumes assigned to this policy
	VolumeBackups []VolumeBackupsResponse `pulumi:"volumeBackups"`
	// Volumes using current backup policy
	VolumesAssigned *int `pulumi:"volumesAssigned"`
	// Weekly backups count to keep
	WeeklyBackupsToKeep *int `pulumi:"weeklyBackupsToKeep"`
	// Yearly backups count to keep
	YearlyBackupsToKeep *int `pulumi:"yearlyBackupsToKeep"`
}

type BackupPolicyState struct {
	// Daily backups count to keep
	DailyBackupsToKeep pulumi.IntPtrInput
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Monthly backups count to keep
	MonthlyBackupsToKeep pulumi.IntPtrInput
	// Name of backup policy
	Name pulumi.StringPtrInput
	// Azure lifecycle management
	ProvisioningState pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// A list of volumes assigned to this policy
	VolumeBackups VolumeBackupsResponseArrayInput
	// Volumes using current backup policy
	VolumesAssigned pulumi.IntPtrInput
	// Weekly backups count to keep
	WeeklyBackupsToKeep pulumi.IntPtrInput
	// Yearly backups count to keep
	YearlyBackupsToKeep pulumi.IntPtrInput
}

func (BackupPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*backupPolicyState)(nil)).Elem()
}

type backupPolicyArgs struct {
	// The name of the NetApp account
	AccountName string `pulumi:"accountName"`
	// Backup policy Name which uniquely identify backup policy.
	BackupPolicyName string `pulumi:"backupPolicyName"`
	// Daily backups count to keep
	DailyBackupsToKeep *int `pulumi:"dailyBackupsToKeep"`
	// The property to decide policy is enabled or not
	Enabled *bool `pulumi:"enabled"`
	// Resource location
	Location string `pulumi:"location"`
	// Monthly backups count to keep
	MonthlyBackupsToKeep *int `pulumi:"monthlyBackupsToKeep"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// A list of volumes assigned to this policy
	VolumeBackups []VolumeBackups `pulumi:"volumeBackups"`
	// Volumes using current backup policy
	VolumesAssigned *int `pulumi:"volumesAssigned"`
	// Weekly backups count to keep
	WeeklyBackupsToKeep *int `pulumi:"weeklyBackupsToKeep"`
	// Yearly backups count to keep
	YearlyBackupsToKeep *int `pulumi:"yearlyBackupsToKeep"`
}

// The set of arguments for constructing a BackupPolicy resource.
type BackupPolicyArgs struct {
	// The name of the NetApp account
	AccountName pulumi.StringInput
	// Backup policy Name which uniquely identify backup policy.
	BackupPolicyName pulumi.StringInput
	// Daily backups count to keep
	DailyBackupsToKeep pulumi.IntPtrInput
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrInput
	// Resource location
	Location pulumi.StringInput
	// Monthly backups count to keep
	MonthlyBackupsToKeep pulumi.IntPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
	// A list of volumes assigned to this policy
	VolumeBackups VolumeBackupsArrayInput
	// Volumes using current backup policy
	VolumesAssigned pulumi.IntPtrInput
	// Weekly backups count to keep
	WeeklyBackupsToKeep pulumi.IntPtrInput
	// Yearly backups count to keep
	YearlyBackupsToKeep pulumi.IntPtrInput
}

func (BackupPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*backupPolicyArgs)(nil)).Elem()
}

type BackupPolicyInput interface {
	pulumi.Input

	ToBackupPolicyOutput() BackupPolicyOutput
	ToBackupPolicyOutputWithContext(ctx context.Context) BackupPolicyOutput
}

func (BackupPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*BackupPolicy)(nil)).Elem()
}

func (i BackupPolicy) ToBackupPolicyOutput() BackupPolicyOutput {
	return i.ToBackupPolicyOutputWithContext(context.Background())
}

func (i BackupPolicy) ToBackupPolicyOutputWithContext(ctx context.Context) BackupPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BackupPolicyOutput)
}

type BackupPolicyOutput struct {
	*pulumi.OutputState
}

func (BackupPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*BackupPolicyOutput)(nil)).Elem()
}

func (o BackupPolicyOutput) ToBackupPolicyOutput() BackupPolicyOutput {
	return o
}

func (o BackupPolicyOutput) ToBackupPolicyOutputWithContext(ctx context.Context) BackupPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(BackupPolicyOutput{})
}
