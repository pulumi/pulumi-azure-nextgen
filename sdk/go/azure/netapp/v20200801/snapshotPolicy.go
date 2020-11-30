// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Snapshot policy information
type SnapshotPolicy struct {
	pulumi.CustomResourceState

	// Schedule for daily snapshots
	DailySchedule DailyScheduleResponsePtrOutput `pulumi:"dailySchedule"`
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// Schedule for hourly snapshots
	HourlySchedule HourlyScheduleResponsePtrOutput `pulumi:"hourlySchedule"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Schedule for monthly snapshots
	MonthlySchedule MonthlyScheduleResponsePtrOutput `pulumi:"monthlySchedule"`
	// Snapshot policy name
	Name pulumi.StringOutput `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Schedule for weekly snapshots
	WeeklySchedule WeeklyScheduleResponsePtrOutput `pulumi:"weeklySchedule"`
}

// NewSnapshotPolicy registers a new resource with the given unique name, arguments, and options.
func NewSnapshotPolicy(ctx *pulumi.Context,
	name string, args *SnapshotPolicyArgs, opts ...pulumi.ResourceOption) (*SnapshotPolicy, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SnapshotPolicyName == nil {
		return nil, errors.New("missing required argument 'SnapshotPolicyName'")
	}
	if args == nil {
		args = &SnapshotPolicyArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:netapp/latest:SnapshotPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200501:SnapshotPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200601:SnapshotPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:netapp/v20200701:SnapshotPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource SnapshotPolicy
	err := ctx.RegisterResource("azure-nextgen:netapp/v20200801:SnapshotPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSnapshotPolicy gets an existing SnapshotPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSnapshotPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SnapshotPolicyState, opts ...pulumi.ResourceOption) (*SnapshotPolicy, error) {
	var resource SnapshotPolicy
	err := ctx.ReadResource("azure-nextgen:netapp/v20200801:SnapshotPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SnapshotPolicy resources.
type snapshotPolicyState struct {
	// Schedule for daily snapshots
	DailySchedule *DailyScheduleResponse `pulumi:"dailySchedule"`
	// The property to decide policy is enabled or not
	Enabled *bool `pulumi:"enabled"`
	// Schedule for hourly snapshots
	HourlySchedule *HourlyScheduleResponse `pulumi:"hourlySchedule"`
	// Resource location
	Location *string `pulumi:"location"`
	// Schedule for monthly snapshots
	MonthlySchedule *MonthlyScheduleResponse `pulumi:"monthlySchedule"`
	// Snapshot policy name
	Name *string `pulumi:"name"`
	// Azure lifecycle management
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Schedule for weekly snapshots
	WeeklySchedule *WeeklyScheduleResponse `pulumi:"weeklySchedule"`
}

type SnapshotPolicyState struct {
	// Schedule for daily snapshots
	DailySchedule DailyScheduleResponsePtrInput
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrInput
	// Schedule for hourly snapshots
	HourlySchedule HourlyScheduleResponsePtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Schedule for monthly snapshots
	MonthlySchedule MonthlyScheduleResponsePtrInput
	// Snapshot policy name
	Name pulumi.StringPtrInput
	// Azure lifecycle management
	ProvisioningState pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Schedule for weekly snapshots
	WeeklySchedule WeeklyScheduleResponsePtrInput
}

func (SnapshotPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*snapshotPolicyState)(nil)).Elem()
}

type snapshotPolicyArgs struct {
	// The name of the NetApp account
	AccountName string `pulumi:"accountName"`
	// Schedule for daily snapshots
	DailySchedule *DailySchedule `pulumi:"dailySchedule"`
	// The property to decide policy is enabled or not
	Enabled *bool `pulumi:"enabled"`
	// Schedule for hourly snapshots
	HourlySchedule *HourlySchedule `pulumi:"hourlySchedule"`
	// Resource location
	Location string `pulumi:"location"`
	// Schedule for monthly snapshots
	MonthlySchedule *MonthlySchedule `pulumi:"monthlySchedule"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the snapshot policy target
	SnapshotPolicyName string `pulumi:"snapshotPolicyName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Schedule for weekly snapshots
	WeeklySchedule *WeeklySchedule `pulumi:"weeklySchedule"`
}

// The set of arguments for constructing a SnapshotPolicy resource.
type SnapshotPolicyArgs struct {
	// The name of the NetApp account
	AccountName pulumi.StringInput
	// Schedule for daily snapshots
	DailySchedule DailySchedulePtrInput
	// The property to decide policy is enabled or not
	Enabled pulumi.BoolPtrInput
	// Schedule for hourly snapshots
	HourlySchedule HourlySchedulePtrInput
	// Resource location
	Location pulumi.StringInput
	// Schedule for monthly snapshots
	MonthlySchedule MonthlySchedulePtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the snapshot policy target
	SnapshotPolicyName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Schedule for weekly snapshots
	WeeklySchedule WeeklySchedulePtrInput
}

func (SnapshotPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*snapshotPolicyArgs)(nil)).Elem()
}

type SnapshotPolicyInput interface {
	pulumi.Input

	ToSnapshotPolicyOutput() SnapshotPolicyOutput
	ToSnapshotPolicyOutputWithContext(ctx context.Context) SnapshotPolicyOutput
}

func (SnapshotPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*SnapshotPolicy)(nil)).Elem()
}

func (i SnapshotPolicy) ToSnapshotPolicyOutput() SnapshotPolicyOutput {
	return i.ToSnapshotPolicyOutputWithContext(context.Background())
}

func (i SnapshotPolicy) ToSnapshotPolicyOutputWithContext(ctx context.Context) SnapshotPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SnapshotPolicyOutput)
}

type SnapshotPolicyOutput struct {
	*pulumi.OutputState
}

func (SnapshotPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SnapshotPolicyOutput)(nil)).Elem()
}

func (o SnapshotPolicyOutput) ToSnapshotPolicyOutput() SnapshotPolicyOutput {
	return o
}

func (o SnapshotPolicyOutput) ToSnapshotPolicyOutputWithContext(ctx context.Context) SnapshotPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SnapshotPolicyOutput{})
}
