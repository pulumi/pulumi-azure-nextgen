// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Backup of a Volume
type Backup struct {
	pulumi.CustomResourceState

	// Type of backup adhoc or scheduled
	BackupType pulumi.StringOutput `pulumi:"backupType"`
	// The creation date of the backup
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// Label for backup
	Label pulumi.StringPtrOutput `pulumi:"label"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Size of backup
	Size pulumi.IntOutput `pulumi:"size"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewBackup registers a new resource with the given unique name, arguments, and options.
func NewBackup(ctx *pulumi.Context,
	name string, args *BackupArgs, opts ...pulumi.ResourceOption) (*Backup, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.BackupName == nil {
		return nil, errors.New("missing required argument 'BackupName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.PoolName == nil {
		return nil, errors.New("missing required argument 'PoolName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.VolumeName == nil {
		return nil, errors.New("missing required argument 'VolumeName'")
	}
	if args == nil {
		args = &BackupArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:netapp/latest:Backup"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200601:Backup"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200701:Backup"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200801:Backup"),
		},
	})
	opts = append(opts, aliases)
	var resource Backup
	err := ctx.RegisterResource("azure-nextgen:netapp/v20200501:Backup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBackup gets an existing Backup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBackup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BackupState, opts ...pulumi.ResourceOption) (*Backup, error) {
	var resource Backup
	err := ctx.ReadResource("azure-nextgen:netapp/v20200501:Backup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Backup resources.
type backupState struct {
	// Type of backup adhoc or scheduled
	BackupType *string `pulumi:"backupType"`
	// The creation date of the backup
	CreationDate *string `pulumi:"creationDate"`
	// Label for backup
	Label *string `pulumi:"label"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState *string `pulumi:"provisioningState"`
	// Size of backup
	Size *int `pulumi:"size"`
	// Resource type
	Type *string `pulumi:"type"`
}

type BackupState struct {
	// Type of backup adhoc or scheduled
	BackupType pulumi.StringPtrInput
	// The creation date of the backup
	CreationDate pulumi.StringPtrInput
	// Label for backup
	Label pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Azure lifecycle management
	ProvisioningState pulumi.StringPtrInput
	// Size of backup
	Size pulumi.IntPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (BackupState) ElementType() reflect.Type {
	return reflect.TypeOf((*backupState)(nil)).Elem()
}

type backupArgs struct {
	// The name of the NetApp account
	AccountName string `pulumi:"accountName"`
	// The name of the backup
	BackupName string `pulumi:"backupName"`
	// Label for backup
	Label *string `pulumi:"label"`
	// Resource location
	Location string `pulumi:"location"`
	// The name of the capacity pool
	PoolName string `pulumi:"poolName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the volume
	VolumeName string `pulumi:"volumeName"`
}

// The set of arguments for constructing a Backup resource.
type BackupArgs struct {
	// The name of the NetApp account
	AccountName pulumi.StringInput
	// The name of the backup
	BackupName pulumi.StringInput
	// Label for backup
	Label pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringInput
	// The name of the capacity pool
	PoolName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the volume
	VolumeName pulumi.StringInput
}

func (BackupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*backupArgs)(nil)).Elem()
}

type BackupInput interface {
	pulumi.Input

	ToBackupOutput() BackupOutput
	ToBackupOutputWithContext(ctx context.Context) BackupOutput
}

func (Backup) ElementType() reflect.Type {
	return reflect.TypeOf((*Backup)(nil)).Elem()
}

func (i Backup) ToBackupOutput() BackupOutput {
	return i.ToBackupOutputWithContext(context.Background())
}

func (i Backup) ToBackupOutputWithContext(ctx context.Context) BackupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BackupOutput)
}

type BackupOutput struct {
	*pulumi.OutputState
}

func (BackupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*BackupOutput)(nil)).Elem()
}

func (o BackupOutput) ToBackupOutput() BackupOutput {
	return o
}

func (o BackupOutput) ToBackupOutputWithContext(ctx context.Context) BackupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(BackupOutput{})
}
