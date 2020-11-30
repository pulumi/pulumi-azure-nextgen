// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type Plan struct {
	// Plan accessibility
	Accessibility *string `pulumi:"accessibility"`
}

// PlanInput is an input type that accepts PlanArgs and PlanOutput values.
// You can construct a concrete instance of `PlanInput` via:
//
//          PlanArgs{...}
type PlanInput interface {
	pulumi.Input

	ToPlanOutput() PlanOutput
	ToPlanOutputWithContext(context.Context) PlanOutput
}

type PlanArgs struct {
	// Plan accessibility
	Accessibility pulumi.StringPtrInput `pulumi:"accessibility"`
}

func (PlanArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*Plan)(nil)).Elem()
}

func (i PlanArgs) ToPlanOutput() PlanOutput {
	return i.ToPlanOutputWithContext(context.Background())
}

func (i PlanArgs) ToPlanOutputWithContext(ctx context.Context) PlanOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PlanOutput)
}

// PlanArrayInput is an input type that accepts PlanArray and PlanArrayOutput values.
// You can construct a concrete instance of `PlanArrayInput` via:
//
//          PlanArray{ PlanArgs{...} }
type PlanArrayInput interface {
	pulumi.Input

	ToPlanArrayOutput() PlanArrayOutput
	ToPlanArrayOutputWithContext(context.Context) PlanArrayOutput
}

type PlanArray []PlanInput

func (PlanArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Plan)(nil)).Elem()
}

func (i PlanArray) ToPlanArrayOutput() PlanArrayOutput {
	return i.ToPlanArrayOutputWithContext(context.Background())
}

func (i PlanArray) ToPlanArrayOutputWithContext(ctx context.Context) PlanArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PlanArrayOutput)
}

type PlanOutput struct{ *pulumi.OutputState }

func (PlanOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Plan)(nil)).Elem()
}

func (o PlanOutput) ToPlanOutput() PlanOutput {
	return o
}

func (o PlanOutput) ToPlanOutputWithContext(ctx context.Context) PlanOutput {
	return o
}

// Plan accessibility
func (o PlanOutput) Accessibility() pulumi.StringPtrOutput {
	return o.ApplyT(func(v Plan) *string { return v.Accessibility }).(pulumi.StringPtrOutput)
}

type PlanArrayOutput struct{ *pulumi.OutputState }

func (PlanArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Plan)(nil)).Elem()
}

func (o PlanArrayOutput) ToPlanArrayOutput() PlanArrayOutput {
	return o
}

func (o PlanArrayOutput) ToPlanArrayOutputWithContext(ctx context.Context) PlanArrayOutput {
	return o
}

func (o PlanArrayOutput) Index(i pulumi.IntInput) PlanOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) Plan {
		return vs[0].([]Plan)[vs[1].(int)]
	}).(PlanOutput)
}

type PlanResponse struct {
	// Plan accessibility
	Accessibility *string `pulumi:"accessibility"`
	// Alternative stack type
	AltStackReference string `pulumi:"altStackReference"`
	// Friendly name for the plan for display in the marketplace
	PlanDisplayName string `pulumi:"planDisplayName"`
	// Text identifier for this plan
	PlanId string `pulumi:"planId"`
	// Identifier for this plan
	SkuId string `pulumi:"skuId"`
	// Stack type (classic or arm)
	StackType string `pulumi:"stackType"`
}

// PlanResponseInput is an input type that accepts PlanResponseArgs and PlanResponseOutput values.
// You can construct a concrete instance of `PlanResponseInput` via:
//
//          PlanResponseArgs{...}
type PlanResponseInput interface {
	pulumi.Input

	ToPlanResponseOutput() PlanResponseOutput
	ToPlanResponseOutputWithContext(context.Context) PlanResponseOutput
}

type PlanResponseArgs struct {
	// Plan accessibility
	Accessibility pulumi.StringPtrInput `pulumi:"accessibility"`
	// Alternative stack type
	AltStackReference pulumi.StringInput `pulumi:"altStackReference"`
	// Friendly name for the plan for display in the marketplace
	PlanDisplayName pulumi.StringInput `pulumi:"planDisplayName"`
	// Text identifier for this plan
	PlanId pulumi.StringInput `pulumi:"planId"`
	// Identifier for this plan
	SkuId pulumi.StringInput `pulumi:"skuId"`
	// Stack type (classic or arm)
	StackType pulumi.StringInput `pulumi:"stackType"`
}

func (PlanResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*PlanResponse)(nil)).Elem()
}

func (i PlanResponseArgs) ToPlanResponseOutput() PlanResponseOutput {
	return i.ToPlanResponseOutputWithContext(context.Background())
}

func (i PlanResponseArgs) ToPlanResponseOutputWithContext(ctx context.Context) PlanResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PlanResponseOutput)
}

// PlanResponseArrayInput is an input type that accepts PlanResponseArray and PlanResponseArrayOutput values.
// You can construct a concrete instance of `PlanResponseArrayInput` via:
//
//          PlanResponseArray{ PlanResponseArgs{...} }
type PlanResponseArrayInput interface {
	pulumi.Input

	ToPlanResponseArrayOutput() PlanResponseArrayOutput
	ToPlanResponseArrayOutputWithContext(context.Context) PlanResponseArrayOutput
}

type PlanResponseArray []PlanResponseInput

func (PlanResponseArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PlanResponse)(nil)).Elem()
}

func (i PlanResponseArray) ToPlanResponseArrayOutput() PlanResponseArrayOutput {
	return i.ToPlanResponseArrayOutputWithContext(context.Background())
}

func (i PlanResponseArray) ToPlanResponseArrayOutputWithContext(ctx context.Context) PlanResponseArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PlanResponseArrayOutput)
}

type PlanResponseOutput struct{ *pulumi.OutputState }

func (PlanResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PlanResponse)(nil)).Elem()
}

func (o PlanResponseOutput) ToPlanResponseOutput() PlanResponseOutput {
	return o
}

func (o PlanResponseOutput) ToPlanResponseOutputWithContext(ctx context.Context) PlanResponseOutput {
	return o
}

// Plan accessibility
func (o PlanResponseOutput) Accessibility() pulumi.StringPtrOutput {
	return o.ApplyT(func(v PlanResponse) *string { return v.Accessibility }).(pulumi.StringPtrOutput)
}

// Alternative stack type
func (o PlanResponseOutput) AltStackReference() pulumi.StringOutput {
	return o.ApplyT(func(v PlanResponse) string { return v.AltStackReference }).(pulumi.StringOutput)
}

// Friendly name for the plan for display in the marketplace
func (o PlanResponseOutput) PlanDisplayName() pulumi.StringOutput {
	return o.ApplyT(func(v PlanResponse) string { return v.PlanDisplayName }).(pulumi.StringOutput)
}

// Text identifier for this plan
func (o PlanResponseOutput) PlanId() pulumi.StringOutput {
	return o.ApplyT(func(v PlanResponse) string { return v.PlanId }).(pulumi.StringOutput)
}

// Identifier for this plan
func (o PlanResponseOutput) SkuId() pulumi.StringOutput {
	return o.ApplyT(func(v PlanResponse) string { return v.SkuId }).(pulumi.StringOutput)
}

// Stack type (classic or arm)
func (o PlanResponseOutput) StackType() pulumi.StringOutput {
	return o.ApplyT(func(v PlanResponse) string { return v.StackType }).(pulumi.StringOutput)
}

type PlanResponseArrayOutput struct{ *pulumi.OutputState }

func (PlanResponseArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PlanResponse)(nil)).Elem()
}

func (o PlanResponseArrayOutput) ToPlanResponseArrayOutput() PlanResponseArrayOutput {
	return o
}

func (o PlanResponseArrayOutput) ToPlanResponseArrayOutputWithContext(ctx context.Context) PlanResponseArrayOutput {
	return o
}

func (o PlanResponseArrayOutput) Index(i pulumi.IntInput) PlanResponseOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) PlanResponse {
		return vs[0].([]PlanResponse)[vs[1].(int)]
	}).(PlanResponseOutput)
}

func init() {
	pulumi.RegisterOutputType(PlanOutput{})
	pulumi.RegisterOutputType(PlanArrayOutput{})
	pulumi.RegisterOutputType(PlanResponseOutput{})
	pulumi.RegisterOutputType(PlanResponseArrayOutput{})
}
