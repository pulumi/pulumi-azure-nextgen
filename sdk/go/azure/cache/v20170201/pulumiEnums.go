// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170201

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Day of the week when a cache can be patched.
type DayOfWeek pulumi.String

const (
	DayOfWeekMonday    = DayOfWeek("Monday")
	DayOfWeekTuesday   = DayOfWeek("Tuesday")
	DayOfWeekWednesday = DayOfWeek("Wednesday")
	DayOfWeekThursday  = DayOfWeek("Thursday")
	DayOfWeekFriday    = DayOfWeek("Friday")
	DayOfWeekSaturday  = DayOfWeek("Saturday")
	DayOfWeekSunday    = DayOfWeek("Sunday")
	DayOfWeekEveryday  = DayOfWeek("Everyday")
	DayOfWeekWeekend   = DayOfWeek("Weekend")
)

func (DayOfWeek) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DayOfWeek) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DayOfWeek) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Role of the linked server.
type ReplicationRole pulumi.String

const (
	ReplicationRolePrimary   = ReplicationRole("Primary")
	ReplicationRoleSecondary = ReplicationRole("Secondary")
)

func (ReplicationRole) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ReplicationRole) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ReplicationRole) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ReplicationRole) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ReplicationRole) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
type SkuFamily pulumi.String

const (
	SkuFamilyC = SkuFamily("C")
	SkuFamilyP = SkuFamily("P")
)

func (SkuFamily) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuFamily) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuFamily) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuFamily) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuFamily) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
type SkuName pulumi.String

const (
	SkuNameBasic    = SkuName("Basic")
	SkuNameStandard = SkuName("Standard")
	SkuNamePremium  = SkuName("Premium")
)

func (SkuName) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuName) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuName) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}