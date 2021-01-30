// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201020

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
type HealthBotPropertiesResponse struct {
	// The link.
	BotManagementPortalLink string `pulumi:"botManagementPortalLink"`
	// The provisioning state of the Healthcare bot resource.
	ProvisioningState string `pulumi:"provisioningState"`
}

// HealthBotPropertiesResponseInput is an input type that accepts HealthBotPropertiesResponseArgs and HealthBotPropertiesResponseOutput values.
// You can construct a concrete instance of `HealthBotPropertiesResponseInput` via:
//
//          HealthBotPropertiesResponseArgs{...}
type HealthBotPropertiesResponseInput interface {
	pulumi.Input

	ToHealthBotPropertiesResponseOutput() HealthBotPropertiesResponseOutput
	ToHealthBotPropertiesResponseOutputWithContext(context.Context) HealthBotPropertiesResponseOutput
}

// The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
type HealthBotPropertiesResponseArgs struct {
	// The link.
	BotManagementPortalLink pulumi.StringInput `pulumi:"botManagementPortalLink"`
	// The provisioning state of the Healthcare bot resource.
	ProvisioningState pulumi.StringInput `pulumi:"provisioningState"`
}

func (HealthBotPropertiesResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*HealthBotPropertiesResponse)(nil)).Elem()
}

func (i HealthBotPropertiesResponseArgs) ToHealthBotPropertiesResponseOutput() HealthBotPropertiesResponseOutput {
	return i.ToHealthBotPropertiesResponseOutputWithContext(context.Background())
}

func (i HealthBotPropertiesResponseArgs) ToHealthBotPropertiesResponseOutputWithContext(ctx context.Context) HealthBotPropertiesResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HealthBotPropertiesResponseOutput)
}

func (i HealthBotPropertiesResponseArgs) ToHealthBotPropertiesResponsePtrOutput() HealthBotPropertiesResponsePtrOutput {
	return i.ToHealthBotPropertiesResponsePtrOutputWithContext(context.Background())
}

func (i HealthBotPropertiesResponseArgs) ToHealthBotPropertiesResponsePtrOutputWithContext(ctx context.Context) HealthBotPropertiesResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HealthBotPropertiesResponseOutput).ToHealthBotPropertiesResponsePtrOutputWithContext(ctx)
}

// HealthBotPropertiesResponsePtrInput is an input type that accepts HealthBotPropertiesResponseArgs, HealthBotPropertiesResponsePtr and HealthBotPropertiesResponsePtrOutput values.
// You can construct a concrete instance of `HealthBotPropertiesResponsePtrInput` via:
//
//          HealthBotPropertiesResponseArgs{...}
//
//  or:
//
//          nil
type HealthBotPropertiesResponsePtrInput interface {
	pulumi.Input

	ToHealthBotPropertiesResponsePtrOutput() HealthBotPropertiesResponsePtrOutput
	ToHealthBotPropertiesResponsePtrOutputWithContext(context.Context) HealthBotPropertiesResponsePtrOutput
}

type healthBotPropertiesResponsePtrType HealthBotPropertiesResponseArgs

func HealthBotPropertiesResponsePtr(v *HealthBotPropertiesResponseArgs) HealthBotPropertiesResponsePtrInput {
	return (*healthBotPropertiesResponsePtrType)(v)
}

func (*healthBotPropertiesResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**HealthBotPropertiesResponse)(nil)).Elem()
}

func (i *healthBotPropertiesResponsePtrType) ToHealthBotPropertiesResponsePtrOutput() HealthBotPropertiesResponsePtrOutput {
	return i.ToHealthBotPropertiesResponsePtrOutputWithContext(context.Background())
}

func (i *healthBotPropertiesResponsePtrType) ToHealthBotPropertiesResponsePtrOutputWithContext(ctx context.Context) HealthBotPropertiesResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HealthBotPropertiesResponsePtrOutput)
}

// The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
type HealthBotPropertiesResponseOutput struct{ *pulumi.OutputState }

func (HealthBotPropertiesResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*HealthBotPropertiesResponse)(nil)).Elem()
}

func (o HealthBotPropertiesResponseOutput) ToHealthBotPropertiesResponseOutput() HealthBotPropertiesResponseOutput {
	return o
}

func (o HealthBotPropertiesResponseOutput) ToHealthBotPropertiesResponseOutputWithContext(ctx context.Context) HealthBotPropertiesResponseOutput {
	return o
}

func (o HealthBotPropertiesResponseOutput) ToHealthBotPropertiesResponsePtrOutput() HealthBotPropertiesResponsePtrOutput {
	return o.ToHealthBotPropertiesResponsePtrOutputWithContext(context.Background())
}

func (o HealthBotPropertiesResponseOutput) ToHealthBotPropertiesResponsePtrOutputWithContext(ctx context.Context) HealthBotPropertiesResponsePtrOutput {
	return o.ApplyT(func(v HealthBotPropertiesResponse) *HealthBotPropertiesResponse {
		return &v
	}).(HealthBotPropertiesResponsePtrOutput)
}

// The link.
func (o HealthBotPropertiesResponseOutput) BotManagementPortalLink() pulumi.StringOutput {
	return o.ApplyT(func(v HealthBotPropertiesResponse) string { return v.BotManagementPortalLink }).(pulumi.StringOutput)
}

// The provisioning state of the Healthcare bot resource.
func (o HealthBotPropertiesResponseOutput) ProvisioningState() pulumi.StringOutput {
	return o.ApplyT(func(v HealthBotPropertiesResponse) string { return v.ProvisioningState }).(pulumi.StringOutput)
}

type HealthBotPropertiesResponsePtrOutput struct{ *pulumi.OutputState }

func (HealthBotPropertiesResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**HealthBotPropertiesResponse)(nil)).Elem()
}

func (o HealthBotPropertiesResponsePtrOutput) ToHealthBotPropertiesResponsePtrOutput() HealthBotPropertiesResponsePtrOutput {
	return o
}

func (o HealthBotPropertiesResponsePtrOutput) ToHealthBotPropertiesResponsePtrOutputWithContext(ctx context.Context) HealthBotPropertiesResponsePtrOutput {
	return o
}

func (o HealthBotPropertiesResponsePtrOutput) Elem() HealthBotPropertiesResponseOutput {
	return o.ApplyT(func(v *HealthBotPropertiesResponse) HealthBotPropertiesResponse { return *v }).(HealthBotPropertiesResponseOutput)
}

// The link.
func (o HealthBotPropertiesResponsePtrOutput) BotManagementPortalLink() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *HealthBotPropertiesResponse) *string {
		if v == nil {
			return nil
		}
		return &v.BotManagementPortalLink
	}).(pulumi.StringPtrOutput)
}

// The provisioning state of the Healthcare bot resource.
func (o HealthBotPropertiesResponsePtrOutput) ProvisioningState() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *HealthBotPropertiesResponse) *string {
		if v == nil {
			return nil
		}
		return &v.ProvisioningState
	}).(pulumi.StringPtrOutput)
}

// The resource model definition representing SKU
type Sku struct {
	// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
	Capacity *int `pulumi:"capacity"`
	// If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family *string `pulumi:"family"`
	// The name of the HealthBot SKU
	Name string `pulumi:"name"`
	// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size *string `pulumi:"size"`
	// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
	Tier *string `pulumi:"tier"`
}

// SkuInput is an input type that accepts SkuArgs and SkuOutput values.
// You can construct a concrete instance of `SkuInput` via:
//
//          SkuArgs{...}
type SkuInput interface {
	pulumi.Input

	ToSkuOutput() SkuOutput
	ToSkuOutputWithContext(context.Context) SkuOutput
}

// The resource model definition representing SKU
type SkuArgs struct {
	// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
	Capacity pulumi.IntPtrInput `pulumi:"capacity"`
	// If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family pulumi.StringPtrInput `pulumi:"family"`
	// The name of the HealthBot SKU
	Name pulumi.StringInput `pulumi:"name"`
	// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size pulumi.StringPtrInput `pulumi:"size"`
	// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
	Tier *SkuTier `pulumi:"tier"`
}

func (SkuArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*Sku)(nil)).Elem()
}

func (i SkuArgs) ToSkuOutput() SkuOutput {
	return i.ToSkuOutputWithContext(context.Background())
}

func (i SkuArgs) ToSkuOutputWithContext(ctx context.Context) SkuOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuOutput)
}

func (i SkuArgs) ToSkuPtrOutput() SkuPtrOutput {
	return i.ToSkuPtrOutputWithContext(context.Background())
}

func (i SkuArgs) ToSkuPtrOutputWithContext(ctx context.Context) SkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuOutput).ToSkuPtrOutputWithContext(ctx)
}

// SkuPtrInput is an input type that accepts SkuArgs, SkuPtr and SkuPtrOutput values.
// You can construct a concrete instance of `SkuPtrInput` via:
//
//          SkuArgs{...}
//
//  or:
//
//          nil
type SkuPtrInput interface {
	pulumi.Input

	ToSkuPtrOutput() SkuPtrOutput
	ToSkuPtrOutputWithContext(context.Context) SkuPtrOutput
}

type skuPtrType SkuArgs

func SkuPtr(v *SkuArgs) SkuPtrInput {
	return (*skuPtrType)(v)
}

func (*skuPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**Sku)(nil)).Elem()
}

func (i *skuPtrType) ToSkuPtrOutput() SkuPtrOutput {
	return i.ToSkuPtrOutputWithContext(context.Background())
}

func (i *skuPtrType) ToSkuPtrOutputWithContext(ctx context.Context) SkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuPtrOutput)
}

// The resource model definition representing SKU
type SkuOutput struct{ *pulumi.OutputState }

func (SkuOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Sku)(nil)).Elem()
}

func (o SkuOutput) ToSkuOutput() SkuOutput {
	return o
}

func (o SkuOutput) ToSkuOutputWithContext(ctx context.Context) SkuOutput {
	return o
}

func (o SkuOutput) ToSkuPtrOutput() SkuPtrOutput {
	return o.ToSkuPtrOutputWithContext(context.Background())
}

func (o SkuOutput) ToSkuPtrOutputWithContext(ctx context.Context) SkuPtrOutput {
	return o.ApplyT(func(v Sku) *Sku {
		return &v
	}).(SkuPtrOutput)
}

// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
func (o SkuOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v Sku) *int { return v.Capacity }).(pulumi.IntPtrOutput)
}

// If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o SkuOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v Sku) *string { return v.Family }).(pulumi.StringPtrOutput)
}

// The name of the HealthBot SKU
func (o SkuOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v Sku) string { return v.Name }).(pulumi.StringOutput)
}

// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o SkuOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v Sku) *string { return v.Size }).(pulumi.StringPtrOutput)
}

// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
func (o SkuOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v Sku) *string { return v.Tier }).(pulumi.StringPtrOutput)
}

type SkuPtrOutput struct{ *pulumi.OutputState }

func (SkuPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Sku)(nil)).Elem()
}

func (o SkuPtrOutput) ToSkuPtrOutput() SkuPtrOutput {
	return o
}

func (o SkuPtrOutput) ToSkuPtrOutputWithContext(ctx context.Context) SkuPtrOutput {
	return o
}

func (o SkuPtrOutput) Elem() SkuOutput {
	return o.ApplyT(func(v *Sku) Sku { return *v }).(SkuOutput)
}

// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
func (o SkuPtrOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *Sku) *int {
		if v == nil {
			return nil
		}
		return v.Capacity
	}).(pulumi.IntPtrOutput)
}

// If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o SkuPtrOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Sku) *string {
		if v == nil {
			return nil
		}
		return v.Family
	}).(pulumi.StringPtrOutput)
}

// The name of the HealthBot SKU
func (o SkuPtrOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Sku) *string {
		if v == nil {
			return nil
		}
		return &v.Name
	}).(pulumi.StringPtrOutput)
}

// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o SkuPtrOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Sku) *string {
		if v == nil {
			return nil
		}
		return v.Size
	}).(pulumi.StringPtrOutput)
}

// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
func (o SkuPtrOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Sku) *string {
		if v == nil {
			return nil
		}
		return v.Tier
	}).(pulumi.StringPtrOutput)
}

// The resource model definition representing SKU
type SkuResponse struct {
	// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
	Capacity *int `pulumi:"capacity"`
	// If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family *string `pulumi:"family"`
	// The name of the HealthBot SKU
	Name string `pulumi:"name"`
	// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size *string `pulumi:"size"`
	// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
	Tier *string `pulumi:"tier"`
}

// SkuResponseInput is an input type that accepts SkuResponseArgs and SkuResponseOutput values.
// You can construct a concrete instance of `SkuResponseInput` via:
//
//          SkuResponseArgs{...}
type SkuResponseInput interface {
	pulumi.Input

	ToSkuResponseOutput() SkuResponseOutput
	ToSkuResponseOutputWithContext(context.Context) SkuResponseOutput
}

// The resource model definition representing SKU
type SkuResponseArgs struct {
	// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
	Capacity pulumi.IntPtrInput `pulumi:"capacity"`
	// If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family pulumi.StringPtrInput `pulumi:"family"`
	// The name of the HealthBot SKU
	Name pulumi.StringInput `pulumi:"name"`
	// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size pulumi.StringPtrInput `pulumi:"size"`
	// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
	Tier pulumi.StringPtrInput `pulumi:"tier"`
}

func (SkuResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*SkuResponse)(nil)).Elem()
}

func (i SkuResponseArgs) ToSkuResponseOutput() SkuResponseOutput {
	return i.ToSkuResponseOutputWithContext(context.Background())
}

func (i SkuResponseArgs) ToSkuResponseOutputWithContext(ctx context.Context) SkuResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuResponseOutput)
}

func (i SkuResponseArgs) ToSkuResponsePtrOutput() SkuResponsePtrOutput {
	return i.ToSkuResponsePtrOutputWithContext(context.Background())
}

func (i SkuResponseArgs) ToSkuResponsePtrOutputWithContext(ctx context.Context) SkuResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuResponseOutput).ToSkuResponsePtrOutputWithContext(ctx)
}

// SkuResponsePtrInput is an input type that accepts SkuResponseArgs, SkuResponsePtr and SkuResponsePtrOutput values.
// You can construct a concrete instance of `SkuResponsePtrInput` via:
//
//          SkuResponseArgs{...}
//
//  or:
//
//          nil
type SkuResponsePtrInput interface {
	pulumi.Input

	ToSkuResponsePtrOutput() SkuResponsePtrOutput
	ToSkuResponsePtrOutputWithContext(context.Context) SkuResponsePtrOutput
}

type skuResponsePtrType SkuResponseArgs

func SkuResponsePtr(v *SkuResponseArgs) SkuResponsePtrInput {
	return (*skuResponsePtrType)(v)
}

func (*skuResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**SkuResponse)(nil)).Elem()
}

func (i *skuResponsePtrType) ToSkuResponsePtrOutput() SkuResponsePtrOutput {
	return i.ToSkuResponsePtrOutputWithContext(context.Background())
}

func (i *skuResponsePtrType) ToSkuResponsePtrOutputWithContext(ctx context.Context) SkuResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SkuResponsePtrOutput)
}

// The resource model definition representing SKU
type SkuResponseOutput struct{ *pulumi.OutputState }

func (SkuResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SkuResponse)(nil)).Elem()
}

func (o SkuResponseOutput) ToSkuResponseOutput() SkuResponseOutput {
	return o
}

func (o SkuResponseOutput) ToSkuResponseOutputWithContext(ctx context.Context) SkuResponseOutput {
	return o
}

func (o SkuResponseOutput) ToSkuResponsePtrOutput() SkuResponsePtrOutput {
	return o.ToSkuResponsePtrOutputWithContext(context.Background())
}

func (o SkuResponseOutput) ToSkuResponsePtrOutputWithContext(ctx context.Context) SkuResponsePtrOutput {
	return o.ApplyT(func(v SkuResponse) *SkuResponse {
		return &v
	}).(SkuResponsePtrOutput)
}

// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
func (o SkuResponseOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v SkuResponse) *int { return v.Capacity }).(pulumi.IntPtrOutput)
}

// If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o SkuResponseOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SkuResponse) *string { return v.Family }).(pulumi.StringPtrOutput)
}

// The name of the HealthBot SKU
func (o SkuResponseOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v SkuResponse) string { return v.Name }).(pulumi.StringOutput)
}

// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o SkuResponseOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SkuResponse) *string { return v.Size }).(pulumi.StringPtrOutput)
}

// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
func (o SkuResponseOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SkuResponse) *string { return v.Tier }).(pulumi.StringPtrOutput)
}

type SkuResponsePtrOutput struct{ *pulumi.OutputState }

func (SkuResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SkuResponse)(nil)).Elem()
}

func (o SkuResponsePtrOutput) ToSkuResponsePtrOutput() SkuResponsePtrOutput {
	return o
}

func (o SkuResponsePtrOutput) ToSkuResponsePtrOutputWithContext(ctx context.Context) SkuResponsePtrOutput {
	return o
}

func (o SkuResponsePtrOutput) Elem() SkuResponseOutput {
	return o.ApplyT(func(v *SkuResponse) SkuResponse { return *v }).(SkuResponseOutput)
}

// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
func (o SkuResponsePtrOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *SkuResponse) *int {
		if v == nil {
			return nil
		}
		return v.Capacity
	}).(pulumi.IntPtrOutput)
}

// If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o SkuResponsePtrOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Family
	}).(pulumi.StringPtrOutput)
}

// The name of the HealthBot SKU
func (o SkuResponsePtrOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SkuResponse) *string {
		if v == nil {
			return nil
		}
		return &v.Name
	}).(pulumi.StringPtrOutput)
}

// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o SkuResponsePtrOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Size
	}).(pulumi.StringPtrOutput)
}

// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
func (o SkuResponsePtrOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Tier
	}).(pulumi.StringPtrOutput)
}

// Read only system data
type SystemDataResponse struct {
	// The timestamp of resource creation (UTC)
	CreatedAt *string `pulumi:"createdAt"`
	// The identity that created the resource.
	CreatedBy *string `pulumi:"createdBy"`
	// The type of identity that created the resource
	CreatedByType *string `pulumi:"createdByType"`
	// The timestamp of resource last modification (UTC)
	LastModifiedAt *string `pulumi:"lastModifiedAt"`
	// The identity that last modified the resource.
	LastModifiedBy *string `pulumi:"lastModifiedBy"`
	// The type of identity that last modified the resource
	LastModifiedByType *string `pulumi:"lastModifiedByType"`
}

// SystemDataResponseInput is an input type that accepts SystemDataResponseArgs and SystemDataResponseOutput values.
// You can construct a concrete instance of `SystemDataResponseInput` via:
//
//          SystemDataResponseArgs{...}
type SystemDataResponseInput interface {
	pulumi.Input

	ToSystemDataResponseOutput() SystemDataResponseOutput
	ToSystemDataResponseOutputWithContext(context.Context) SystemDataResponseOutput
}

// Read only system data
type SystemDataResponseArgs struct {
	// The timestamp of resource creation (UTC)
	CreatedAt pulumi.StringPtrInput `pulumi:"createdAt"`
	// The identity that created the resource.
	CreatedBy pulumi.StringPtrInput `pulumi:"createdBy"`
	// The type of identity that created the resource
	CreatedByType pulumi.StringPtrInput `pulumi:"createdByType"`
	// The timestamp of resource last modification (UTC)
	LastModifiedAt pulumi.StringPtrInput `pulumi:"lastModifiedAt"`
	// The identity that last modified the resource.
	LastModifiedBy pulumi.StringPtrInput `pulumi:"lastModifiedBy"`
	// The type of identity that last modified the resource
	LastModifiedByType pulumi.StringPtrInput `pulumi:"lastModifiedByType"`
}

func (SystemDataResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*SystemDataResponse)(nil)).Elem()
}

func (i SystemDataResponseArgs) ToSystemDataResponseOutput() SystemDataResponseOutput {
	return i.ToSystemDataResponseOutputWithContext(context.Background())
}

func (i SystemDataResponseArgs) ToSystemDataResponseOutputWithContext(ctx context.Context) SystemDataResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SystemDataResponseOutput)
}

func (i SystemDataResponseArgs) ToSystemDataResponsePtrOutput() SystemDataResponsePtrOutput {
	return i.ToSystemDataResponsePtrOutputWithContext(context.Background())
}

func (i SystemDataResponseArgs) ToSystemDataResponsePtrOutputWithContext(ctx context.Context) SystemDataResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SystemDataResponseOutput).ToSystemDataResponsePtrOutputWithContext(ctx)
}

// SystemDataResponsePtrInput is an input type that accepts SystemDataResponseArgs, SystemDataResponsePtr and SystemDataResponsePtrOutput values.
// You can construct a concrete instance of `SystemDataResponsePtrInput` via:
//
//          SystemDataResponseArgs{...}
//
//  or:
//
//          nil
type SystemDataResponsePtrInput interface {
	pulumi.Input

	ToSystemDataResponsePtrOutput() SystemDataResponsePtrOutput
	ToSystemDataResponsePtrOutputWithContext(context.Context) SystemDataResponsePtrOutput
}

type systemDataResponsePtrType SystemDataResponseArgs

func SystemDataResponsePtr(v *SystemDataResponseArgs) SystemDataResponsePtrInput {
	return (*systemDataResponsePtrType)(v)
}

func (*systemDataResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**SystemDataResponse)(nil)).Elem()
}

func (i *systemDataResponsePtrType) ToSystemDataResponsePtrOutput() SystemDataResponsePtrOutput {
	return i.ToSystemDataResponsePtrOutputWithContext(context.Background())
}

func (i *systemDataResponsePtrType) ToSystemDataResponsePtrOutputWithContext(ctx context.Context) SystemDataResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SystemDataResponsePtrOutput)
}

// Read only system data
type SystemDataResponseOutput struct{ *pulumi.OutputState }

func (SystemDataResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SystemDataResponse)(nil)).Elem()
}

func (o SystemDataResponseOutput) ToSystemDataResponseOutput() SystemDataResponseOutput {
	return o
}

func (o SystemDataResponseOutput) ToSystemDataResponseOutputWithContext(ctx context.Context) SystemDataResponseOutput {
	return o
}

func (o SystemDataResponseOutput) ToSystemDataResponsePtrOutput() SystemDataResponsePtrOutput {
	return o.ToSystemDataResponsePtrOutputWithContext(context.Background())
}

func (o SystemDataResponseOutput) ToSystemDataResponsePtrOutputWithContext(ctx context.Context) SystemDataResponsePtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *SystemDataResponse {
		return &v
	}).(SystemDataResponsePtrOutput)
}

// The timestamp of resource creation (UTC)
func (o SystemDataResponseOutput) CreatedAt() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.CreatedAt }).(pulumi.StringPtrOutput)
}

// The identity that created the resource.
func (o SystemDataResponseOutput) CreatedBy() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.CreatedBy }).(pulumi.StringPtrOutput)
}

// The type of identity that created the resource
func (o SystemDataResponseOutput) CreatedByType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.CreatedByType }).(pulumi.StringPtrOutput)
}

// The timestamp of resource last modification (UTC)
func (o SystemDataResponseOutput) LastModifiedAt() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.LastModifiedAt }).(pulumi.StringPtrOutput)
}

// The identity that last modified the resource.
func (o SystemDataResponseOutput) LastModifiedBy() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.LastModifiedBy }).(pulumi.StringPtrOutput)
}

// The type of identity that last modified the resource
func (o SystemDataResponseOutput) LastModifiedByType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SystemDataResponse) *string { return v.LastModifiedByType }).(pulumi.StringPtrOutput)
}

type SystemDataResponsePtrOutput struct{ *pulumi.OutputState }

func (SystemDataResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SystemDataResponse)(nil)).Elem()
}

func (o SystemDataResponsePtrOutput) ToSystemDataResponsePtrOutput() SystemDataResponsePtrOutput {
	return o
}

func (o SystemDataResponsePtrOutput) ToSystemDataResponsePtrOutputWithContext(ctx context.Context) SystemDataResponsePtrOutput {
	return o
}

func (o SystemDataResponsePtrOutput) Elem() SystemDataResponseOutput {
	return o.ApplyT(func(v *SystemDataResponse) SystemDataResponse { return *v }).(SystemDataResponseOutput)
}

// The timestamp of resource creation (UTC)
func (o SystemDataResponsePtrOutput) CreatedAt() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.CreatedAt
	}).(pulumi.StringPtrOutput)
}

// The identity that created the resource.
func (o SystemDataResponsePtrOutput) CreatedBy() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.CreatedBy
	}).(pulumi.StringPtrOutput)
}

// The type of identity that created the resource
func (o SystemDataResponsePtrOutput) CreatedByType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.CreatedByType
	}).(pulumi.StringPtrOutput)
}

// The timestamp of resource last modification (UTC)
func (o SystemDataResponsePtrOutput) LastModifiedAt() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.LastModifiedAt
	}).(pulumi.StringPtrOutput)
}

// The identity that last modified the resource.
func (o SystemDataResponsePtrOutput) LastModifiedBy() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.LastModifiedBy
	}).(pulumi.StringPtrOutput)
}

// The type of identity that last modified the resource
func (o SystemDataResponsePtrOutput) LastModifiedByType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SystemDataResponse) *string {
		if v == nil {
			return nil
		}
		return v.LastModifiedByType
	}).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(HealthBotPropertiesResponseOutput{})
	pulumi.RegisterOutputType(HealthBotPropertiesResponsePtrOutput{})
	pulumi.RegisterOutputType(SkuOutput{})
	pulumi.RegisterOutputType(SkuPtrOutput{})
	pulumi.RegisterOutputType(SkuResponseOutput{})
	pulumi.RegisterOutputType(SkuResponsePtrOutput{})
	pulumi.RegisterOutputType(SystemDataResponseOutput{})
	pulumi.RegisterOutputType(SystemDataResponsePtrOutput{})
}
